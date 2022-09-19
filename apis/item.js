import { apiAuthInstance } from "./api";

export const getItemsTeacher = async (_bankId) => {
  const res = await apiAuthInstance.get("/item/teacher", {
    params: { bank_id: _bankId },
  });
  return res.data.items;
};

export const postEditItemStatus = async (_itemid, _status) => {
  const res = await apiAuthInstance.post("/item/teacher/status", {
    item_id: _itemid,
    status: _status,
  });
  return res.data;
};
