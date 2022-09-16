import { apiInstance } from "./api";
import { setObjectItem } from "../utils/localStorage";

export const postLogin = async (_userData) => {
  const data = await apiInstance.post("/auth/login", _userData).then((res) => {
    setObjectItem("USERDATA", res.data.user_data);
    return res.data;
  });
  return data;
};
