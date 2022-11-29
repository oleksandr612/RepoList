import ActionType from "../action-types/repositories";

type SearchRepositoriesAction = {
  type: ActionType.SEARCH_REPOSITORIES;
};

type SearchRepositoriesSuccessAction = {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
};

type SearchRepositoriesErrorAction = {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
};

type RepositoriesAction =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;

export default RepositoriesAction;
