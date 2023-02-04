import { getPlayers } from '.';
import { takeLatest } from 'redux-saga/effects';
import { Types as PokerTypes } from '../../reducers/poker';

const pokerSagas = [takeLatest(PokerTypes.GET_PLAYERS, getPlayers)];

export default pokerSagas;
