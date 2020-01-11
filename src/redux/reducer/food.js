import {
  REQUEST_LATEST_DATA,
  SHOW_LATEST_DATA,
  FAILED_GET_DATA,
  SUCCES_GET_DATA
} from "../type/food";

const initialState = {
  loading: null,
  data: [],
  message: null,
  count: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_LATEST_DATA:
      return {
        ...state,
        loading: true
      };
    case SHOW_LATEST_DATA:
      return {
        ...state,
        loading: false,
        data: action.payload.data.data
      };
    case FAILED_GET_DATA:
      return {
        ...state,
        loading: false,
        message: action.payload
      };
    case SUCCES_GET_DATA:
      return {
        ...state,
        loading: false,
        message: action.payload
      };
    default:
      return state;
  }
};
