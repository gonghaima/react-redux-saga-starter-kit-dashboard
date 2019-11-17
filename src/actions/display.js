import { createActions } from "redux-actions";
import { ActionTypes } from "../constants/index";

export const { updateMenuDisplay } = createActions({
  [ActionTypes.UPDATE_MENU_DISPLAY]: showMenu => ({ showMenu })
});

