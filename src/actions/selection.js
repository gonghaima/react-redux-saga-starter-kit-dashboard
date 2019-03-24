import { createActions } from 'redux-actions';
import { ActionTypes } from '../constants';

export const { selectionChange: setSelection } = createActions({
  [ActionTypes.SELECTION_CHANGE]: selectedValue => ({ selectedValue })
});

export const { pageChange: setPage } = createActions({
  [ActionTypes.PAGE_CHANGE]: currentPage => ({ currentPage })
});
