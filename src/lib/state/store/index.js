import { createStore, compose, applyMiddleware } from "redux";
import { reducer } from "../reducers/index";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer);
