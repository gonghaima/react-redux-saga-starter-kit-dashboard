import { createActions } from "redux-actions";
import { ActionTypes } from "../constants/index";

export const { getUsers } = createActions({
  [ActionTypes.GET_USERS]: query => ({ query })
});

export const { filterUsers } = createActions({
  [ActionTypes.FILTER_USERS]: query => ({ query })
});
