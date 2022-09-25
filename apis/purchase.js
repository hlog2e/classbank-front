import { apiAuthInstance } from "./api";

export const getAllPendingPurchases = async (_bankId) => {
  const res = await apiAuthInstance.get("/purchase/teacher/pending", {
    params: { bank_id: _bankId },
  });
  return res.data.purchases;
};

export const getCountPurchases = async (_bankId) => {
  const res = await apiAuthInstance.get("/purchase/teacher/pending/count", {
    params: { bank_id: _bankId },
  });
  return res.data.count;
};

//아래부터는 학생 API

export const getPendingPurchasesStudent = async () => {
  const res = await apiAuthInstance.get("/purchase/student/pending");
  return res.data.purchases;
};

export const postNewPurchase = async (_itemData) => {
  const res = await apiAuthInstance.post("/purchase/student/new", {
    item_data: _itemData,
  });
  return res.data;
};

export const postCancelPurchase = async (_purchaseId) => {
  const res = await apiAuthInstance.post("/purchase/student/cancel", {
    purchase_id: _purchaseId,
  });
  return res.data;
};
