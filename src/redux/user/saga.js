import { all, takeEvery, fork } from "redux-saga/effects";
import { GET_USERS } from "redux/user/actions";

export function* getUsers() {
  yield takeEvery(GET_USERS, function* (action) {
    const { users } = action.payload;
    if (users && users.items) {
      yield console.log(users.total_count); // do something
    } else {
      yield [];
    }
  });
}

export default function* rootSaga() {
  yield all([fork(getUsers)]);
}
