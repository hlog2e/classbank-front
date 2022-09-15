import axios from "axios";

export const apiInstance = axios.create({
  baseURL: "http://localhost:3001",
});

export const apiAuthInstance = axios.create({
  baseURL: "http://localhost:3001",
});

apiAuthInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      console.log("로그인안됨");
    }
    return Promise.reject(error);
  }
);
