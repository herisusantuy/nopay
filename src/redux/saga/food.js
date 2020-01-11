import { put, call } from "redux-saga/effects";
import {
  SHOW_LATEST_DATA,
  FAILED_GET_DATA,
  SUCCES_GET_DATA
} from "../type/coin";
import getFoods from "./api/apiFoods";

export function* getFoodData() {
  try {
    const foods = yield call(getFoods);
    console.log(foods, "FOODS");

    yield put({
      type: SHOW_LATEST_DATA,
      payload: foods
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
