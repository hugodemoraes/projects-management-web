import React from 'react';

import { TeamSwitcher, Projects } from '@components';

import { Container } from './Main.styles';

const Main = () => (
  <Container>
    <TeamSwitcher />
    <Projects />
  </Container>
);

export default Main;
