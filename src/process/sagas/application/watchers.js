import { persisted, generalFail } from '.';
import { takeLatest } from 'redux-saga/effects';
import { Types as ApplicationTypes } from '../../reducers/application';

const applicationSagas = [
  takeLatest(ApplicationTypes.PERSISTED, persisted),
  takeLatest(ApplicationTypes.GENERAL_FAIL, generalFail),
];

export default applicationSagas;
