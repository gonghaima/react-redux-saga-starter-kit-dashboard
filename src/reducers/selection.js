import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';
import { ActionTypes } from '../constants';
import config from '../config';

export const selectionState = {
  itemPerPage: config.selection[config.defaultSelectionIndex],
  selectionItems: config.selection,
  currentPage: config.defaultPage
};

export default {
  selection: handleActions(
    {
      [ActionTypes.SELECTION_CHANGE]: (state, { payload }) => {
        const data = payload.selectedValue;
        return immutable(state, {
          itemPerPage: { $set: data }
        });
      },
      [ActionTypes.PAGE_CHANGE]: (state, { payload }) => {
        const data = payload.currentPage;
        return immutable(state, {
          currentPage: { $set: data }
        });
      }
    },
    selectionState
  )
};
