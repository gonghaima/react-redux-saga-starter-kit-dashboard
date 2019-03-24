import { setSelection, setPage } from './selection';

describe('Selection', () => {
  it('should set selection action', () => {
    const selectionAction = setSelection(21);
    expect(selectionAction.payload.selectedValue).toBe(21);
  });

  it('should set page action', () => {
    const pageAction = setPage(5);
    expect(pageAction.payload.currentPage).toBe(5);
  });
});
