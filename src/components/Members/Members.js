import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MembersActions from '~/store/ducks/members';
import { Modal, Button } from '@components';

import { MemberList, MemberListItem, MemberName } from './Members.styles';

const handleToggleMembersModal = (toggleMembersModal, active) => () => {
  toggleMembersModal(active);
};

const Members = ({ toggleMembersModal }) => (
  <Modal size="big">
    <h1>Membros</h1>

    <form>
      <MemberList>
        <MemberListItem>
          <MemberName>Hugo de Moraes</MemberName>
        </MemberListItem>
      </MemberList>

      <Button
        filled={false}
        color="gray"
        onClick={handleToggleMembersModal(toggleMembersModal, false)}
      >
        Cancelar
      </Button>
    </form>
  </Modal>
);

Members.propTypes = {
  toggleMembersModal: func,
};

Members.defaultProps = {
  toggleMembersModal: () => null,
};

const mapDispatchToProps = dispatch => bindActionCreators(MembersActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Members);
