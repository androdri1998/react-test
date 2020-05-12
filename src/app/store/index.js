import { combineReducers } from "redux";
import { repositoriesReducer } from "./reducers/repositories.reducer";

const reducers = combineReducers({
  repositoriesReducer: repositoriesReducer,
});

export default reducers;
