import { apiAuthInstance } from "./api";

export const getItemsTeacher = async (_bankId) => {
  const res = await apiAuthInstance.get("/item/teacher", {
    params: { bank_id: _bankId },
  });
  return res.data.items;
};
