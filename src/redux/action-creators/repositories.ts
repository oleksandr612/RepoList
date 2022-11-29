import axios from "axios";
import { Dispatch } from "redux";
import ActionType from "../action-types/repositories";
import Actions from "../actions/repositories";

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await axios.get("https://registry.npmjs.org/-/v1/search", {
        params: {
          text: term,
        },
      });
      const repositoryNames = data.objects.map((item: any) => item.package.name);
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: repositoryNames,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      });
    }
  };
};
