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

export default (payload, config, state) => {
  let filteredData = [];
  let selectedGroup = {};
  if (payload.query === "") {
    filteredData = state.data;
  }
  if (payload.query && payload.query !== "") {
    filteredData = state.data.filter(
      user =>
        user.fullName.indexOf(payload.query) > -1 ||
        user.email.indexOf(payload.query) > -1
    );
  }
  if (payload.query === config.userMapping.all.queryValue) {
    filteredData = allSelector(state);
    selectedGroup = config.userMapping.all;
  }
  if (payload.query === config.userMapping.favorites.queryValue) {
    filteredData = favoritesSelector(state);
    selectedGroup = config.userMapping.favorites;
  }
  if (payload.query === config.userMapping.administrator.queryValue) {
    filteredData = administratorSelector(state);
    selectedGroup = config.userMapping.administrator;
  }
  if (payload.query === config.userMapping.nonAdmin.queryValue) {
    filteredData = nonAdminSelector(state);
    selectedGroup = config.userMapping.nonAdmin;
  }
  if (payload.query === config.userMapping.archived.queryValue) {
    filteredData = archivedSelector(state);
    selectedGroup = config.userMapping.archived;
  }
  return { filteredData, selectedGroup };
};
