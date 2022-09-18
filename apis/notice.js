import { apiAuthInstance } from "./api";

export const getAllNotices = async () => {
  const res = await apiAuthInstance.get("/notice");
  return res.data.notices;
};
