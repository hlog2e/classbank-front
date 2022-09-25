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

//아래부터는 학생 API

export const getUserInfoStudent = async () => {
  const res = await apiAuthInstance.get("/user/student/info");
  return res.data.user;
};

export const getSameBankStudents = async () => {
  const res = await apiAuthInstance.get("/user/student/same-bank");
  return res.data.students;
};
