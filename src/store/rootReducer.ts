import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter.slice";

const rootReducer = combineReducers({
  counter: counterSlice,
});

export default rootReducer;
