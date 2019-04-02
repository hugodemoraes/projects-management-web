import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { actions as toastrActions } from 'react-redux-toastr';

import api from '~/services/api';
import AuthActions from '../ducks/auth';

export function* signIn({ email, password }) {
  try {
    const { data } = yield call(api.post, 'sessions', { email, password });

    localStorage.setItem('@PMWeb:token', data.token);

    yield put(AuthActions.signInSuccess(data.token));
    yield put(push('/'));
  } catch (error) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha no login',
        message: 'Verifique seu e-mail/senha!',
      }),
    );
  }
}

export function* signOut() {
  try {
    localStorage.removeItem('@PMWeb:token');
    localStorage.removeItem('@PMWeb:team');

    yield put(push('/signin'));
  } catch (error) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Erro na operação',
        message: 'Tente novamente.',
      }),
    );
  }
}
