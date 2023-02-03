import { createActions, createReducer } from "reduxsauce";

import { updateProps, updateProp } from "process/helpers";

export const { Types, Creators } = createActions(
  {
    persisted: null,
    updateProps: ["props"],
    updateProp: ["key", "payload"],
  },
  { prefix: "application/" }
);

export const initialState = {};

export default createReducer(initialState, {
  [Types.UPDATE_PROPS]: updateProps,
  [Types.UPDATE_PROP]: updateProp,
});
