import * as types from "../type/types";

export const createUserRequest = user => ({
  type: types.CREATE_USER_REQUEST,
  payload: user
});
