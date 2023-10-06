import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducerFunction from "./reducer";

const store = createStore(reducerFunction, applyMiddleware(thunk));

export default store;
