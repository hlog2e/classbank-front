import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Student() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/student/home");
  }, []);
  //  return(<div></div>);
}
