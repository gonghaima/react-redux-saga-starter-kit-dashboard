import {
  allSelector,
  favoritesSelector,
  administratorSelector,
  nonAdminSelector,
  archivedSelector
} from "./selectors";

export default (payload, config, state) => {
  const { userMapping } = config;
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
  if (payload.query === userMapping.all.queryValue) {
    filteredData = allSelector(state);
    selectedGroup = userMapping.all;
  }
  if (payload.query === userMapping.favorites.queryValue) {
    filteredData = favoritesSelector(state);
    selectedGroup = userMapping.favorites;
  }
  if (payload.query === userMapping.administrator.queryValue) {
    filteredData = administratorSelector(state);
    selectedGroup = userMapping.administrator;
  }
  if (payload.query === userMapping.nonAdmin.queryValue) {
    filteredData = nonAdminSelector(state);
    selectedGroup = userMapping.nonAdmin;
  }
  if (payload.query === userMapping.archived.queryValue) {
    filteredData = archivedSelector(state);
    selectedGroup = userMapping.archived;
  }
  return { filteredData, selectedGroup };
};
