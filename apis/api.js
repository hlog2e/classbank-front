import axios from "axios";
import { deleteItem } from "../utils/localStorage";

export const apiInstance = axios.create({
  baseURL: "http://localhost:3001",
});

export const apiAuthInstance = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: true,
});

apiAuthInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      deleteItem("USERDATA");
      console.log("로그인안됨");
    }
    return Promise.reject(error);
  }
);
