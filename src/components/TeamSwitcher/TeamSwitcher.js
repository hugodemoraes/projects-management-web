import React, { Component } from 'react';
import {
  func, arrayOf, shape, string, number,
} from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TeamsActions from '~/store/ducks/teams';

import {
  Container, TeamList, Team, Avatar,
} from './TeamSwitcher.styles';

class TeamSwitcher extends Component {
  componentDidMount() {
    const { getTeamsRequest } = this.props;

    getTeamsRequest();
  }

  render() {
    const {
      teams: { data: teams },
    } = this.props;

    return (
      <Container>
        <TeamList>
          {teams.map(team => (
            <Team key={team.id}>
              <Avatar
                alt={team.name}
                src={`https://ui-avatars.com/api/?font-size=0.33&background=7159C1&color=fff&name=${
                  team.name
                }`}
              />
            </Team>
          ))}
        </TeamList>
      </Container>
    );
  }
}

TeamSwitcher.propTypes = {
  getTeamsRequest: func,
  teams: arrayOf(
    shape({
      id: number,
      name: string,
    }),
  ),
};

TeamSwitcher.defaultProps = {
  getTeamsRequest: () => null,
  teams: [
    {
      id: 0,
      name: '',
    },
  ],
};

const mapStateToProps = ({ teams }) => ({
  teams,
});

const mapDispatchToProps = dispatch => bindActionCreators(TeamsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeamSwitcher);
