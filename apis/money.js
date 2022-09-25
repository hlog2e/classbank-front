import { apiAuthInstance } from "./api";

export const postChangeBalanceTeacher = async (
  _uuid,
  _type,
  _amount,
  _reason
) => {
  const res = await apiAuthInstance.post("/money/teacher/balance", {
    uuid: _uuid,
    type: _type,
    amount: _amount,
    reason: _reason,
  });
  return res.data;
};
