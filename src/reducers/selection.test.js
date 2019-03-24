import reducer from './selection';
import { ActionTypes } from '../constants';

describe('Selection reducer', () => {
  it('should return the initial state', () => {
    expect(reducer.selection(undefined, {})).toMatchSnapshot();
  });

  it(`should handle ${ActionTypes.SELECTION_CHANGE}`, () => {
    expect(
      reducer.selection(undefined, {
        type: ActionTypes.SELECTION_CHANGE,
        payload: { itemPerPage: [2, 4, 10] }
      })
    ).toMatchSnapshot();
  });

  it(`should handle ${ActionTypes.PAGE_CHANGE}`, () => {
    expect(
      reducer.selection(undefined, {
        type: ActionTypes.PAGE_CHANGE,
        payload: {}
      })
    ).toMatchSnapshot();
  });
});
