import { handleActions } from "redux-actions";
import immutable from "immutability-helper";
import { ActionTypes } from "../constants";
import config from "../config";

export const selectionState = {
  selection: config.selection
};

export default {
  selection: handleActions(
    {
      [ActionTypes.SELECTION_CHANGE]: (state, { payload }) => {
        const data = payload.currentSelection;
        return immutable(state, {
          itemPerPage: { $set: data }
        });
      }
    },
    selectionState
  )
};
