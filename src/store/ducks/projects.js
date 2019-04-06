import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getProjectsRequest: null,
  getProjectsSuccess: ['data'],
  toggleProjectModal: ['projectModalOpened'],
  createProjectRequest: ['title'],
  createProjectSuccess: ['project'],
});

export const ProjectsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  projectModalOpened: false,
});

/* Reducers */

export const success = (state, { data }) => state.merge({ data });

export const toggleProjectModal = (state, { projectModalOpened }) => state.merge({ projectModalOpened });

export const createSuccess = (state, { project }) => state.merge({ data: [...state.data, project] });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_PROJECTS_SUCCESS]: success,
  [Types.TOGGLE_PROJECT_MODAL]: toggleProjectModal,
  [Types.CREATE_PROJECT_SUCCESS]: createSuccess,
});
