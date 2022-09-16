import Link from "next/link";
import { useState } from "react";
import Logo from "../components/Logo";
import { useRouter } from "next/router";
import { postLogin } from "../apis/auth";
import { errorToast } from "../utils/toast";
import { engAndNumRegexChecker } from "../utils/regex";

export default function Login() {
  const [userData, setUserData] = useState({ user_id: "", password: "" });
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user_data = await postLogin(userData);
      if (user_data.type === "teacher") {
        router.push("/teacher");
      }
      if (user_data.type === "student") {
        router.push("/student");
      }
    } catch (err) {
      console.log(err);
      setUserData({ user_id: "", password: "" });
      errorToast(err.response.data.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen px-6 py-12 ">
      <div className="flex flex-col max-w-[400px] w-full px-8 bg-white rounded-3xl drop-shadow-2xl">
        <div className="flex items-center justify-between py-5 text-lg">
          <Logo />
          <Link href="/join">
            <a className="text-sm text-blue-400">회원가입</a>
          </Link>
        </div>
        <form onSubmit={handleLogin}>
          <h1 className="mt-6 text-3xl font-semibold ">로그인</h1>
          <div className="py-6">
            <p className="px-2 py-1 text-sm text-slate-400">아이디</p>
            <input
              type="text"
              value={userData.user_id}
              onChange={(e) => {
                if (engAndNumRegexChecker(e.target.value)) {
                  setUserData({ ...userData, user_id: e.target.value });
                }
              }}
              className="w-full h-12 px-3 border-none bg-slate-100 rounded-xl text-slate-500 focus:ring-1 focus:ring-blue-500"
            />
            <p className="px-2 py-1 mt-2 text-sm text-slate-400">비밀번호</p>
            <input
              type="password"
              value={userData.password}
              onChange={(e) => {
                setUserData({ ...userData, password: e.target.value });
              }}
              className="w-full h-12 px-3 border-none bg-slate-100 rounded-xl text-slate-500 focus:ring-1 focus:ring-blue-500"
            />
            <button className="w-full h-12 font-semibold text-white bg-blue-500 mt-14 rounded-xl">
              로그인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
