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

//아래는 학생

export const postSendMoney = async (_receiver_id, _amount) => {
  const res = await apiAuthInstance.post("/money/student/send-money", {
    receiver_id: _receiver_id,
    amount: _amount,
  });

  return res.data;
};
