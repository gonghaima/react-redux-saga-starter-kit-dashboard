import { handleActions } from "redux-actions";
import immutable from "immutability-helper";
import config from "../config";
import { ActionTypes, STATUS } from "../constants/index";
import filterUsers from "../utils/filterUsers";

export const userState = {
  data: [],
  filteredData: [],
  status: STATUS.IDLE,
  message: "",
  query: "All Users",
  selected: config.userMapping.all
};

export default {
  users: handleActions(
    {
      [ActionTypes.GET_USERS]: (state, { payload }) => {
        const data = [];
        return immutable(state, {
          data: {
            $set: data
          },
          filteredData: {
            $set: data
          },
          message: { $set: "" },
          status: { $set: STATUS.RUNNING }
        });
      },
      [ActionTypes.USER_GET_SUCCESS]: (state, { payload }) =>
        immutable(state, {
          data: {
            $set: payload.data || []
          },
          filteredData: {
            $set: payload.data || []
          },
          status: { $set: STATUS.READY }
        }),
      [ActionTypes.USER_GET_FAILURE]: (state, { payload }) =>
        immutable(state, {
          message: { $set: payload.message || "" },
          status: { $set: STATUS.ERROR }
        }),
      [ActionTypes.FILTER_USERS]: (state, { payload }) => {
        const { filteredData, selectedGroup } = filterUsers(
          payload,
          config,
          state
        );

        return immutable(state, {
          filteredData: {
            $set: filteredData
          },
          message: { $set: "" },
          status: { $set: STATUS.RUNNING },
          query: {
            $set: payload.query
          },
          selected: {
            $set: selectedGroup
          }
        });
      }
    },
    userState
  )
};
