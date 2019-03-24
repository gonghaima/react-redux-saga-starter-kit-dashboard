import { createSelector } from "reselect";

const userSelector = state => state.data;

const allSelector = createSelector(
  userSelector,
  user => user
);
const favoritesSelector = createSelector(
  userSelector,
  user => user.filter(user => user.favorite === true)
);

const administratorSelector = createSelector(
  userSelector,
  user => user.filter(user => user.administrator === true)
);

const nonAdminSelector = createSelector(
  userSelector,
  user => user.filter(user => user.administrator === false)
);

const archivedSelector = createSelector(
  userSelector,
  user => user.filter(user => user.archived === true)
);

export {
  allSelector,
  favoritesSelector,
  administratorSelector,
  nonAdminSelector,
  archivedSelector
};
