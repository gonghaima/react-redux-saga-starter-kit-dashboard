import { all, call, put, takeLatest } from 'redux-saga/effects';
import { request } from '../modules/client';
import { ActionTypes } from '../constants';
import mockedProductData from '../mocks/productData';

export function* getProducts(indicator) {
  try {
    if (indicator && indicator === 'error') throw new Error('unexpected event');
    const response =
      process.env.REACT_APP_ENV && process.env.REACT_APP_ENV === 'integration'
        ? yield call(request, '/api/product')
        : { data: mockedProductData };
    yield put({
      type: ActionTypes.PRODUCT_GET_SUCCESS,
      payload: { data: (response && response.data) || [] }
    });
  } catch (err) {
    yield put({
      type: ActionTypes.PRODUCT_GET_FAILURE,
      payload: err
    });
  }
}

export default function* root() {
  yield all([takeLatest(ActionTypes.GET_PRODUCTS, getProducts)]);
}
