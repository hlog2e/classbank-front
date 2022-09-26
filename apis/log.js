import { apiAuthInstance } from "./api";

export const getAllbalanceLogs = async (_bankId) => {
  const res = await apiAuthInstance.get("/log/student/balance", {});
  return res.data.balanceLogs;
};
