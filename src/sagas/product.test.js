
import product, { getProducts } from './product';
import { ActionTypes } from '../constants';

describe('Product saga', () => {
  it('should have the expected watchers', async () => {
    const gen = getProducts();

    const actualLength = await gen.next().value.PUT.action.payload.data.length;

    expect(actualLength).toBe(1000);
  });

  it('should catch error', async () => {
    const gen = getProducts('error');

    expect(gen.next().value.PUT.action.type).toEqual('PRODUCT_GET_FAILURE');
  });
});
