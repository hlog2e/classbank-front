import { useEffect } from "react";
import { apiAuthInstance } from "../apis/api";

export default function Join() {
  useEffect(() => {
    apiAuthInstance.get("/user/check");
  }, []);
  return <div>회원가입</div>;
}
