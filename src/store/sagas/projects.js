import { call, put } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';

import api from '~/services/api';
import ProjectsActions from '../ducks/projects';

export function* getProjects() {
  try {
    const { data } = yield call(api.get, 'projects');

    yield put(ProjectsActions.getProjectsSuccess(data));
  } catch (error) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha ao buscar projetos',
        message: 'Houve um erro ao buscar seus projetos, tente novamente!',
      }),
    );
  }
}

export function* createProject({ title }) {
  try {
    const { data } = yield call(api.post, 'projects', { title });

    yield put(ProjectsActions.createProjectSuccess(data));
    yield put(ProjectsActions.toggleProjectModal(false));
  } catch (error) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha ao criar projeto',
        message: 'Houve um erro ao criar seu projeto, tente novamente!',
      }),
    );
  }
}
