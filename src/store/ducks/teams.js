import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getTeamsRequest: null,
  getTeamsSuccess: ['data'],
  selectTeam: ['team'],
  toggleTeamModal: ['teamModalOpened'],
  createTeamRequest: ['name'],
  createTeamSuccess: ['team'],
});

export const TeamsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  teamModalOpened: false,
  active: JSON.parse(localStorage.getItem('@PMWeb:team')) || null,
});

/* Reducers */

export const getSuccess = (state, { data }) => state.merge({ data });

export const selectTeam = (state, { team }) => {
  localStorage.setItem('@PMWeb:team', JSON.stringify(team));

  return state.merge({ active: team.id });
};

export const toggleTeamModal = (state, { teamModalOpened }) => state.merge({ teamModalOpened });

export const createSuccess = (state, { team }) => state.merge({ data: [...state.data, team] });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_TEAMS_SUCCESS]: getSuccess,
  [Types.SELECT_TEAM]: selectTeam,
  [Types.TOGGLE_TEAM_MODAL]: toggleTeamModal,
  [Types.CREATE_TEAM_SUCCESS]: createSuccess,
});
