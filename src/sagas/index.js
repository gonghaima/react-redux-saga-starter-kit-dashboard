import { all, fork } from "redux-saga/effects";
import product from "./product";
import user from "./user";

export default function* root() {
  // yield all([fork(app), fork(github), fork(user)]);
  yield all([fork(product), fork(user)]);
}
