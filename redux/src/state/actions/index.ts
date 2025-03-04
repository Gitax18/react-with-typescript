import { ActionTypes } from "../action-types";

export interface SearchRepositoriesAction {
  type: ActionTypes.SEARCH_REPO;
}

export interface SearchRepositoriesSuccessAction {
  type: ActionTypes.SEARCH_REPO_SC;
  payload: string[];
}

export interface SearchRepositoriesErrorAction {
  type: ActionTypes.SEARCH_REPO_ER;
  payload: string;
}

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;
