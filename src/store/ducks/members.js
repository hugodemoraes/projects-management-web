import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  toggleMembersModal: ['membersModalOpened'],
});

export const MembersTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  membersModalOpened: false,
});

/* Reducers */

export const toggleMembersModal = (state, { membersModalOpened }) => state.merge({ membersModalOpened });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TOGGLE_MEMBERS_MODAL]: toggleMembersModal,
});
