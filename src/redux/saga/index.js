import { all, takeLatest } from "redux-saga/effects";
import { REQUEST_LATEST_DATA } from "../type/coin";
import { getCoinData } from "./coin";
import userSagas from "./users";

export default function* IndexSaga() {
  yield all([takeLatest(REQUEST_LATEST_DATA, getCoinData), ...userSagas]);
}
