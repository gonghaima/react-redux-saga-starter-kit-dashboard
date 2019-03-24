import reducer from './product';
import { ActionTypes } from '../constants';

describe('Product reducer', () => {
  it('should return the initial state', () => {
    expect(reducer.product(undefined, {})).toMatchSnapshot();
  });

  it(`should handle ${ActionTypes.GET_PRODUCTS}`, () => {
    expect(
      reducer.product(undefined, {
        type: ActionTypes.GET_PRODUCTS
      })
    ).toMatchSnapshot();
  });

  it(`should handle ${ActionTypes.PRODUCT_GET_SUCCESS}`, () => {
    expect(
      reducer.product(undefined, {
        type: ActionTypes.PRODUCT_GET_SUCCESS,
        payload: {}
      })
    ).toMatchSnapshot();
  });

  it(`should handle ${ActionTypes.PRODUCT_GET_FAILURE}`, () => {
    expect(
      reducer.product(undefined, {
        type: ActionTypes.PRODUCT_GET_FAILURE,
        payload: {}
      })
    ).toMatchSnapshot();
  });
});
