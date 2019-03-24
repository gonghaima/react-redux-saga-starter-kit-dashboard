import { all, put, takeLatest } from "redux-saga/effects";
import { ActionTypes } from "../constants";
import mockedUserData from "../mocks/userData";

export function* getUsers() {
  try {
    yield put({
      type: ActionTypes.USER_GET_SUCCESS,
      payload: { data: mockedUserData }
    });
  } catch (err) {
    yield put({
      type: ActionTypes.USER_GET_FAILURE,
      payload: err
    });
  }
}

export default function* root() {
  yield all([takeLatest(ActionTypes.GET_USERS, getUsers)]);
}
