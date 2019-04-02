import React, { Component } from 'react';

import {
  Container, TeamList, Team, Avatar,
} from './TeamSwitcher.styles';

export default class TeamSwitcher extends Component {
  state = {};

  render() {
    return (
      <Container>
        <TeamList>
          <Team>
            <Avatar
              alt="Moraes Developments"
              src="https://ui-avatars.com/api/?font-size=0.33&background=7159C1&color=fff&name=Moraes Developments"
            />
          </Team>
          <Team>
            <Avatar
              alt="Nome Time"
              src="https://ui-avatars.com/api/?font-size=0.33&background=7159C1&color=fff&name=Nome Time"
            />
          </Team>
          <Team>
            <Avatar
              alt="Nome Time"
              src="https://ui-avatars.com/api/?font-size=0.33&background=7159C1&color=fff&name=Nome Time"
            />
          </Team>
          <Team>
            <Avatar
              alt="Nome Time"
              src="https://ui-avatars.com/api/?font-size=0.33&background=7159C1&color=fff&name=NomeTime"
            />
          </Team>
        </TeamList>
      </Container>
    );
  }
}
