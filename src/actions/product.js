import { createActions } from 'redux-actions';
import { ActionTypes } from '../constants/index';

export const { getProducts } = createActions({
  [ActionTypes.GET_PRODUCTS]: query => ({ query })
});
