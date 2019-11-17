import { handleActions } from "redux-actions";
import immutable from "immutability-helper";
import { ActionTypes, STATUS } from "../constants/index";

export const displayState = {
  showMenu: true
};

export default {
  display: handleActions(
    {
      [ActionTypes.UPDATE_MENU_DISPLAY]: (state, { payload }) => {
        debugger;
        return immutable(state, {
          showMenu: { $set: payload.showMenu }
        });
      }
    },
    displayState
  )
};
