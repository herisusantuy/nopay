export { REQUEST_LATEST_DATA } from "../type/coin";

export const getCoin = data => {
  return {
    type: REQUEST_LATEST_DATA,
    payload: data
  };
};
