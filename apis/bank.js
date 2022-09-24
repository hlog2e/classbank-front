import { apiAuthInstance } from "./api";

export const getTeacherBankInfo = async () => {
  const res = await apiAuthInstance.get("/bank/teacher/info");
  return res.data.bankData;
};

export const updateTeacherBankInfo = async (_updateDataName, _updateData) => {
  const res = await apiAuthInstance.post(
    "/bank/teacher/info/" + _updateDataName,
    _updateData
  );
  return res.data.bankData;
};

export const getBankInfoStudent = async () => {
  const res = await apiAuthInstance.get("/bank/student/info");
  return res.data.bankData;
};
