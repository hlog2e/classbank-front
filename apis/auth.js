import { apiAuthInstance } from "./api";
import { setObjectItem } from "../utils/localStorage";

export const postLogin = async (_userData) => {
  const data = await apiAuthInstance
    .post("/auth/login", _userData)
    .then((res) => {
      setObjectItem("USERDATA", res.data.user_data);
      return res.data;
    });
  return data;
};
