import { apiAuthInstance } from "./api";

export const getAllUserTeacher = async (_bankId) => {
  const res = await apiAuthInstance.get("/user/teacher", {
    params: { bank_id: _bankId },
  });
  return res.data.users;
};

export const postEditUserInfoTeacher = async (_userUuid, _changeDataObj) => {
  const res = await apiAuthInstance.post("/user/teacher/info", {
    user_uuid: _userUuid,
    changeDataObj: _changeDataObj,
  });
  return res.data;
};
