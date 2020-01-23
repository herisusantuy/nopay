import axios from "axios";
import { BASE_URL } from "../../../general/general";

export const createUser = param => {
  return axios.post(BASE_URL + "/register", param);
};
