import { all } from 'redux-saga/effects';

import pokerSagas from './poker/watchers';
import applicationSagas from './application/watchers';

export default function* root() {
  yield all([...applicationSagas, ...pokerSagas]);
}
