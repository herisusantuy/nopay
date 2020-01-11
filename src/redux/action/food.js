export { REQUEST_LATEST_DATA } from "../type/food";

export const getFood = data => {
  return {
    type: REQUEST_LATEST_DATA,
    payload: data
  };
};
