import { combineReducers } from "redux";
import apiReducer from "./reducer";
// import { apiReducer } from "./reducer";
// import { apiReducer } from "./reducer";

export const rootReducer=combineReducers({
    candidateRed:apiReducer,
})
export default rootReducer;