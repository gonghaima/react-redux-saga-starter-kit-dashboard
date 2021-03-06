import { handleActions } from "redux-actions";
import immutable from "immutability-helper";
import { ActionTypes } from "../constants/index";

export const displayState = {
  showMenu: true
};

export default {
  display: handleActions(
    {
      [ActionTypes.UPDATE_MENU_DISPLAY]: (state, { payload }) => {
        return immutable(state, {
          showMenu: { $set: payload.showMenu }
        });
      }
    },
    displayState
  )
};
