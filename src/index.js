import { PersistGate } from "redux-persist/integration/react";

import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import Application from "./show/Application";
import { store as generateStore } from "process/redux";

import "./index.css";

const { store, persistor } = generateStore();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Application />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
