import { call, put } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';

import api from '~/services/api';
import MembersActions from '../ducks/members';

export function* getMembers() {
  try {
    const { data } = yield call(api.get, 'members');

    yield put(MembersActions.getMembersSuccess(data));
  } catch (error) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha ao buscar membros',
        message: 'Houve um erro ao buscar os membros do time, tente novamente!',
      }),
    );
  }
}

export function* updateMember({ memberId, roles }) {
  try {
    yield call(api.put, `members/${memberId}`, { roles: roles.map(role => role.id) });

    yield put(
      toastrActions.add({
        type: 'success',
        title: 'Membro atualizado',
        message: 'O membro foi atualizado com sucesso!',
        timeOut: 3000,
      }),
    );

    yield put(MembersActions.toggleMembersModal(false));
  } catch (error) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha ao salver membro',
        message: 'Houve um erro ao salvar as alterações do membro, tente novamente!',
      }),
    );
  }
}
