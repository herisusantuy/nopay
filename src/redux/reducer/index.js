import { combineReducers } from "redux";
import coin from "./coin";
import food from "./food";

const rootReducer = combineReducers({
  coin,
  food
});

export default rootReducer;
