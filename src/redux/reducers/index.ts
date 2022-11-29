import { combineReducers } from "redux";
import RepositoriesReducer from "./repositories";

const reducers = combineReducers({
  repositories: RepositoriesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
