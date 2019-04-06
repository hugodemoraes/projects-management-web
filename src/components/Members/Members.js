import React, { Component } from 'react';
import {
  arrayOf, shape, func, string, number,
} from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import api from '~/services/api';
import MembersActions from '~/store/ducks/members';

import { Modal, Button } from '@components';

import Select from 'react-select';
import { MemberList, MemberListItem, MemberName } from './Members.styles';

class Members extends Component {
  state = {
    roles: [],
  };

  async componentDidMount() {
    const { getMembersRequest } = this.props;

    getMembersRequest();

    const { data } = await api.get('roles');

    this.setState({ roles: data });
  }

  handleToggleMembersModal = (active) => {
    const { toggleMembersModal } = this.props;

    toggleMembersModal(active);
  };

  handleRoleChange = (memberId, role) => {
    const { updateMemberRequest } = this.props;

    updateMemberRequest(memberId, role);
  };

  render() {
    const {
      members: { data: members },
    } = this.props;
    const { roles } = this.state;

    return (
      <Modal size="big">
        <h1>Membros</h1>

        <form>
          <MemberList>
            {members.map(member => (
              <MemberListItem key={member.id}>
                <MemberName>{member.user.name}</MemberName>
                <Select
                  isMulti
                  placeholder="Selecione"
                  options={roles}
                  value={member.roles}
                  getOptionLabel={role => role.name}
                  getOptionValue={role => role.id}
                  onChange={value => this.handleRoleChange(member.id, value)}
                />
              </MemberListItem>
            ))}
          </MemberList>

          <Button filled={false} color="gray" onClick={() => this.handleToggleMembersModal(false)}>
            Cancelar
          </Button>
        </form>
      </Modal>
    );
  }
}

Members.propTypes = {
  toggleMembersModal: func,
  getMembersRequest: func,
  updateMemberRequest: func,
  members: shape({
    data: arrayOf(
      shape({
        id: number,
        user: shape({
          name: string,
        }),
        roles: arrayOf(shape({})),
      }),
    ),
  }),
};

Members.defaultProps = {
  toggleMembersModal: () => null,
  getMembersRequest: () => null,
  updateMemberRequest: () => null,
  members: {
    data: [
      {
        id: 0,
        user: {
          name: '',
        },
        roles: [{}],
      },
    ],
  },
};

const mapStateToProps = ({ members }) => ({
  members,
});

const mapDispatchToProps = dispatch => bindActionCreators(MembersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Members);
