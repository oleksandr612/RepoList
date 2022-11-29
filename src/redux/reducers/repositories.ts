import RepositoriesAction from "../actions/repositories";
import ActionType from "../action-types/repositories";

interface RepositoriesState {
  loading: boolean;
  data: string[];
  error: string | null;
}

const initialState: RepositoriesState = {
  loading: false,
  data: [],
  error: null,
};

const reducer = (
  state: RepositoriesState = initialState,
  action: RepositoriesAction
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
