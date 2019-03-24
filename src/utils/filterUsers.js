import {
  allSelector,
  favoritesSelector,
  administratorSelector,
  nonAdminSelector,
  archivedSelector
} from "./selectors";

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
