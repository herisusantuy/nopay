import { takeEvery, takeLatest, call, fork, put } from "redux-saga/effects";
import * as actions from "../action/users";
import * as types from "../type/types";
import * as api from "./api/userApi";

function* createUser({ payload }) {
  try {
    yield call(api.createUser, payload);

    yield call(getUsers);
  } catch (e) {
    // yield put(actions.usersError({
    //     error: 'An error occurred when trying to create the user'
    // }));
  }
}
function* watchCreateUserRequest() {
  yield takeLatest(types.CREATE_USER_REQUEST, createUser);
}

const usersSagas = [fork(watchCreateUserRequest)];

export default usersSagas;
