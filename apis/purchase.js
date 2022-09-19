import { apiAuthInstance } from "./api";

export const getAllPendingPurchases = async (_bankId) => {
  const res = await apiAuthInstance.get("/purchase/teacher/pending", {
    params: { bank_id: _bankId },
  });
  return res.data.purchases;
};
