import React, { Component } from 'react';
import {
  func, arrayOf, shape, string, number,
} from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TeamsActions from '~/store/ducks/teams';
import AuthActions from '~/store/ducks/auth';

import { Modal, Button } from '@components';
import {
  Container, TeamList, Team, Avatar, NewTeam, Logout,
} from './TeamSwitcher.styles';

class TeamSwitcher extends Component {
  state = {
    newTeam: '',
  };

  componentDidMount() {
    const { getTeamsRequest } = this.props;

    getTeamsRequest();
  }

  handleTeamSelect = (team) => {
    const { selectTeam } = this.props;

    selectTeam(team);
  };

  handleToggleTeamModal = (active) => {
    const { toggleTeamModal } = this.props;

    toggleTeamModal(active);
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCreateTeam = (e) => {
    e.preventDefault();

    const { createTeamRequest } = this.props;
    const { newTeam } = this.state;

    createTeamRequest(newTeam);
  };

  render() {
    const {
      teams: { data: teams, teamModalOpened }, signOut,
    } = this.props;
    const { newTeam } = this.state;

    return (
      <Container>
        <TeamList>
          {teams.map(team => (
            <Team key={team.id} onClick={() => this.handleTeamSelect(team)}>
              <Avatar
                alt={team.name}
                src={`https://ui-avatars.com/api/?font-size=0.33&background=7159C1&color=fff&name=${
                  team.name
                }`}
              />
            </Team>
          ))}

          <NewTeam onClick={() => this.handleToggleTeamModal(true)}>NOVO</NewTeam>

          {teamModalOpened && (
            <Modal>
              <h1>Criar time</h1>
              <form onSubmit={this.handleCreateTeam}>
                <span>NOME</span>
                <input
                  name="newTeam"
                  placeholder="Digite o nome do time"
                  value={newTeam}
                  onChange={this.handleInputChange}
                />

                <Button size="big" type="submit">
                  Salvar
                </Button>
                <Button size="small" color="gray" onClick={() => this.handleToggleTeamModal(false)}>
                  Cancelar
                </Button>
              </form>
            </Modal>
          )}
        </TeamList>

        <Logout onClick={signOut}>SAIR</Logout>
      </Container>
    );
  }
}

TeamSwitcher.propTypes = {
  getTeamsRequest: func,
  selectTeam: func,
  toggleTeamModal: func,
  createTeamRequest: func,
  signOut: func,
  teams: shape({
    data: arrayOf(
      shape({
        id: number,
        name: string,
      }),
    ),
  }),
};

TeamSwitcher.defaultProps = {
  getTeamsRequest: () => null,
  selectTeam: () => null,
  toggleTeamModal: () => null,
  createTeamRequest: () => null,
  signOut: () => null,
  teams: {
    data: [
      {
        id: 0,
        name: '',
      },
    ],
  },
};

const mapStateToProps = ({ teams }) => ({
  teams,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...TeamsActions,
    ...AuthActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeamSwitcher);
