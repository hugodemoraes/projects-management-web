import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  toggleMembersModal: ['membersModalOpened'],
  getMembersRequest: null,
  getMembersSuccess: ['data'],
  updateMemberRequest: ['memberId', 'roles'],
});

export const MembersTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  membersModalOpened: false,
  data: [],
});

/* Reducers */

export const toggleMembersModal = (state, { membersModalOpened }) => state.merge({ membersModalOpened });

export const success = (state, { data }) => state.merge({ data });

export const updateMember = (state, { memberId, roles }) => state.merge({
  data: state.data.map(member => (member.id === memberId ? { ...member, roles } : member)),
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TOGGLE_MEMBERS_MODAL]: toggleMembersModal,
  [Types.GET_MEMBERS_SUCCESS]: success,
  [Types.UPDATE_MEMBER_REQUEST]: updateMember,
});
