import { put, call } from "redux-saga/effects";
import {
  SHOW_LATEST_DATA,
  FAILED_GET_DATA,
  SUCCES_GET_DATA
} from "../type/coin";
import getCoin from "./api/apiCoin";

export function* getCoinData() {
  try {
    const coins = yield call(getCoin);

    yield put({
      type: SHOW_LATEST_DATA,
      payload: coins
    });
    yield put({
      type: SUCCES_GET_DATA,
      payload: "Succesfully get data coins"
    });
  } catch (error) {
    yield put({
      type: FAILED_GET_DATA,
      payload: "Fatal Error"
    });
    console.log(error);
  }
}
