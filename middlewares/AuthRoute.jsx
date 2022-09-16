import { useEffect, useState } from "react";
import { getObjectItem } from "../utils/localStorage";
import { useRouter } from "next/router";

export default function AuthRoute({ children, isTeacherPage }) {
  const router = useRouter();
  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    const currentUser = getObjectItem("USERDATA");
    if (!currentUser) {
      alert("로그인 후 이용할 수 있는 서비스 입니다.");
      router.replace("/login");
    } else {
      switch (isTeacherPage) {
        case true:
          if (currentUser.type === "teacher") {
            setIsValid(true);
            break;
          } else {
            setIsValid(false);
            alert("접근권한 없음.");
            router.back();
            break;
          }
        case false:
          if (currentUser.type === "student") {
            setIsValid(true);
            break;
          } else {
            setIsValid(false);
            alert("접근권한 없음.");
            router.back();
            break;
          }
      }
    }
  }, []);
  if (isValid) {
    return children;
  }
}
