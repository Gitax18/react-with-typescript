import axios from "axios";
import { ActionTypes } from "../action-types";
import { Action } from "../actions";
import { Dispatch } from "redux";

export const SearchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.SEARCH_REPO,
    });

    try {
      const { data } = await axios.get(
        `https://registry.npmjs.org/-/v1/search?text=${term}`
      );

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const names = data.objects.map((result: any) => result.package.name);

      dispatch({
        type: ActionTypes.SEARCH_REPO_SC,
        payload: names,
      });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: ActionTypes.SEARCH_REPO_ER,
          payload: error.message,
        });
      }
    }
  };
};
