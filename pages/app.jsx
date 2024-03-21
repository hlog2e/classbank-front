import { useRouter } from "next/router";
import { useEffect } from "react";
import { getObjectItem } from "../utils/localStorage";

export default function AppRouter() {
  const router = useRouter();

  const switching = async () => {
    const currentUser = getObjectItem("USERDATA");
    if (!currentUser) {
      router.replace("/login");
    } else {
      switch (currentUser.type) {
        case "teacher":
          router.replace("/teacher");
          break;
        case "student":
          router.replace("/student");
          break;
      }
    }
  };
  useEffect(() => {
    switching();
  }, []);
}
