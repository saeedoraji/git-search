import { all, takeEvery, fork } from "redux-saga/effects";
import { GET_USERS_REPO } from "redux/repo/actions";

export function* getUsersRepo() {
  yield takeEvery(GET_USERS_REPO, function* (action) {
    yield console.log(action, "saga"); // do something
  });
}

export default function* rootSaga() {
  yield all([fork(getUsersRepo)]);
}
