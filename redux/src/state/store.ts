/* eslint-disable @typescript-eslint/no-unused-vars */
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import reduce from "./reducers";

export const store = createStore(reduce, {}, applyMiddleware(thunk));
