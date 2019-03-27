import { setSelection } from "./selection";

describe("Selection", () => {
  it("should set selection action", () => {
    const selectionAction = setSelection(21);
    expect(selectionAction.payload.currentSelection).toBe(21);
  });
});
