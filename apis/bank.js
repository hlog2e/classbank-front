import { apiAuthInstance } from "./api";

export const getTeacherBankInfo = async () => {
  const res = await apiAuthInstance.get("/bank/teacher/info");
  return res.data.bankData;
};
