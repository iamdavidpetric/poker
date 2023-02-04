import { createActions, createReducer } from 'reduxsauce';

import { updateProps, updateProp } from 'process/helpers';

export const { Types, Creators } = createActions(
  {
    updateProps: ['props'],
    updateProp: ['key', 'payload'],

    getPlayers: null,
  },
  { prefix: 'poker/' },
);

export const initialState = { players: [] };

export default createReducer(initialState, {
  [Types.UPDATE_PROPS]: updateProps,
  [Types.UPDATE_PROP]: updateProp,
});
