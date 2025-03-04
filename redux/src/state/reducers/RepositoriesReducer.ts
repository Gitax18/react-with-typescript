import { Action } from "../actions/index";
import { ActionTypes } from "../action-types";

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionTypes.SEARCH_REPO:
      return { loading: true, error: null, data: [] };
    case ActionTypes.SEARCH_REPO_SC:
      return { loading: false, error: null, data: action.payload };
    case ActionTypes.SEARCH_REPO_ER:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
