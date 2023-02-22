import { applyMiddleware } from "redux";
import { legacy_createStore as createStore} from 'redux'
import logger from "redux-logger";
import reduxThunk from 'redux-thunk';
import rootReducer from "./reducers/rootReducer";
// import { rootReducer } from "./reducers/rootReducer";

const middlewares:any=[reduxThunk];
if(process.env.NODE_ENV==='development'){
    middlewares.push(logger);
}
export const store=createStore(rootReducer,applyMiddleware(...middlewares));

export default store;