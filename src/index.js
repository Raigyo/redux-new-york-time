import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./lib/state/store/index";
import { TabsContextProvider } from "./lib/context/index";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TabsContextProvider>
        <App />
      </TabsContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
