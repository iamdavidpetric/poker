import Api from 'process/api';
import { put } from 'redux-saga/effects';

import { Types as PokerTypes } from 'process/reducers/poker';
import { Types as ApplicationTypes } from 'process/reducers/application';

export const getPlayers = function* () {
  console.log(ApplicationTypes);
  yield put({
    type: Api.API_CALL,
    actions: {
      success: { type: PokerTypes.UPDATE_PROP, key: 'players' },
      fail: { type: ApplicationTypes.GENERAL_FAIL },
    },
  });
};
