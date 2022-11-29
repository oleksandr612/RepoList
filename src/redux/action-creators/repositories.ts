import axios from "axios";
import { Dispatch } from "redux";
import ActionType from "../action-types/repositories";
import Actions from "../actions/repositories";

const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );
      const repositories = data.object.map((item: any) => item.package.name);
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: repositories,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      });
    }
  };
};

export default searchRepositories;
