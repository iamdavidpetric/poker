import { createActions, createReducer } from 'reduxsauce';

import { updateProps } from 'process/helpers';

export const { Types, Creators } = createActions(
  {
    updateProps: ['props'],
  },
  { prefix: 'transient/' },
);

export const initialState = {};

export default createReducer(initialState, {
  [Types.UPDATE_PROPS]: updateProps,
});
