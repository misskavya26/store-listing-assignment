import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import allReducer from "./allReducer";

const store = createStore(allReducer, composeWithDevTools())

export default store;