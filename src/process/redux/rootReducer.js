import { createActions } from "reduxsauce";
import { persistCombineReducers } from "redux-persist";

import { storeConfig } from "./config";
import reducers from "process/reducers";

export const { Types } = createActions(
  {
    reset: null,
  },
  { prefix: "state/" }
);

const appReducers = persistCombineReducers(storeConfig, {
  ...reducers,
});

const rootReducer = (state, action) => {
  if (action && action.type === "state/RESET") {
    state = { application: {} };
  }

  return appReducers(state, action);
};

export default rootReducer;
