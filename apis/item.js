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

export const postItemDelete = async (_itemid) => {
  const res = await apiAuthInstance.post("/item/teacher/delete", {
    item_id: _itemid,
  });
  return res.data;
};

export const postItemAdd = async (_bankId, _itemData) => {
  const res = await apiAuthInstance.post("/item/teacher/add", {
    bank_id: _bankId,
    item_data: _itemData,
  });
  return res.data.item;
};
