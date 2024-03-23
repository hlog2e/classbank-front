import { apiAuthInstance } from "./api";
import { deleteItem, setObjectItem } from "../utils/localStorage";

export const postLogin = async (_userData) => {
  const data = await apiAuthInstance
    .post("/auth/login", _userData)
    .then((res) => {
      setObjectItem("USERDATA", res.data.user_data);
      return res.data;
    });
  return data.user_data;
};

export const postJoin = async (_userData) => {
  const data = await apiAuthInstance
    .post("/auth/join", _userData)
    .then((res) => {
      setObjectItem("USERDATA", res.data.user_data);
      return res.data;
    });
  return data.user_data;
};

export const postLogout = async () => {
  const res = await apiAuthInstance.post("/auth/logout");
  deleteItem("USERDATA");
  alert("로그아웃 되었습니다.");
  return res.data;
};

export const postChangeStudentPassword = async ({
  oldPassword,
  newPassword,
}) => {
  const { data } = await apiAuthInstance.post("/auth/password-change/student", {
    oldPassword,
    newPassword,
  });

  return data;
};
