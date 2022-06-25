import TSideBar from "../components/teacher/TSideBar";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Student() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/teacher/home");
  }, []);
  //  return(<div></div>);
}
