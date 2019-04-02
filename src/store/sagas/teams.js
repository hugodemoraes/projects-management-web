import { call, put } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';

import api from '~/services/api';
import TeamsActions from '../ducks/teams';

export function* getTeams() {
  try {
    const { data } = yield call(api.get, 'teams');

    yield put(TeamsActions.getTeamsSuccess(data));
  } catch (error) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha ao buscar times',
        message: 'Houve um erro ao buscar seus time, tente novamente!',
      }),
    );
  }
}

export function* createTeam({ name }) {
  try {
    const { data } = yield call(api.post, 'teams', { name });

    yield put(TeamsActions.createTeamSuccess(data));
    yield put(TeamsActions.toggleTeamModal(false));
  } catch (error) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha ao criar time',
        message: 'Houve um erro ao criar seu time, tente novamente!',
      }),
    );
  }
}
