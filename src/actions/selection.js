import { createActions } from 'redux-actions';
import { ActionTypes } from '../constants';

export const { selectionChange: setSelection } = createActions({
  [ActionTypes.SELECTION_CHANGE]: selectedValue => ({ selectedValue })
});
