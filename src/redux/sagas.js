import { all } from "redux-saga/effects";
import userSagas from "redux/user/saga";
import repoSagas from "redux/repo/saga";

export default function* rootSaga(getState) {
  yield all([userSagas(), repoSagas()]);
}
