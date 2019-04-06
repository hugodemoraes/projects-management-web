import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  shape, arrayOf, string, number, bool, func,
} from 'prop-types';

import ProjectsActions from '~/store/ducks/projects';
import MembersActions from '~/store/ducks/members';
import { Modal, Members } from '@components';

import {
  Container, Header, HeaderTitle, Button, Project, Description,
} from './Projects.styles';

class Projects extends Component {
  state = {
    newProject: '',
  };

  componentDidMount() {
    const { activeTeam, getProjectsRequest } = this.props;

    if (activeTeam) {
      getProjectsRequest();
    }
  }

  handleToggleProjectModal = (active = true) => {
    const { toggleProjectModal } = this.props;

    toggleProjectModal(active);
  };

  handleToggleMembersModal = (active = true) => {
    const { toggleMembersModal } = this.props;

    toggleMembersModal(active);
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCreateProject = (e) => {
    e.preventDefault();

    const { createProjectRequest } = this.props;
    const { newProject } = this.state;

    createProjectRequest(newProject);

    this.setState({ newProject: '' });
  };

  render() {
    const {
      activeTeam,
      projects: { data: projects, projectModalOpened },
      members: { membersModalOpened },
    } = this.props;
    const { newProject } = this.state;

    if (!activeTeam) return null;

    return (
      <Container>
        <Header>
          <HeaderTitle>{activeTeam.name}</HeaderTitle>
          <div>
            <Button onClick={() => this.handleToggleProjectModal()}>+ Novo</Button>
            <Button onClick={() => this.handleToggleMembersModal()}>Membros</Button>
          </div>
        </Header>

        {projects.map(project => (
          <Project key={project.id}>
            <Description>{project.title}</Description>
          </Project>
        ))}

        {projectModalOpened && (
          <Modal>
            <h1>Criar projeto</h1>
            <form onSubmit={this.handleCreateProject}>
              <span>TÍTULO</span>
              <input
                name="newProject"
                placeholder="Digite o título do project"
                value={newProject}
                onChange={this.handleInputChange}
              />

              <Button size="big" type="submit">
                Salvar
              </Button>
              <Button
                size="small"
                color="gray"
                onClick={() => this.handleToggleProjectModal(false)}
              >
                Cancelar
              </Button>
            </form>
          </Modal>
        )}
        {membersModalOpened && <Members />}
      </Container>
    );
  }
}

Projects.propTypes = {
  activeTeam: shape({
    name: string,
  }),
  projects: shape({
    data: arrayOf(
      shape({
        id: number,
        title: string,
      }),
    ),
    projectModalOpened: bool,
  }),
  members: shape({
    membersModalOpened: bool,
  }),
  getProjectsRequest: func,
  toggleProjectModal: func,
  createProjectRequest: func,
  toggleMembersModal: func,
};

Projects.defaultProps = {
  activeTeam: {
    name: '',
  },
  projects: {
    data: [
      {
        id: 0,
        title: '',
      },
    ],
    projectModalOpened: false,
  },
  members: {
    membersModalOpened: false,
  },
  getProjectsRequest: () => null,
  toggleProjectModal: () => null,
  createProjectRequest: () => null,
  toggleMembersModal: () => null,
};

const mapStateToProps = ({ teams, projects, members }) => ({
  activeTeam: teams.active,
  projects,
  members,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...ProjectsActions,
    ...MembersActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Projects);
