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

  const handleLogin = (e) => {
    e.preventDefault();
    postLogin(userData)
      .then((data) => {
        if (data.user_data.type === "teacher") {
          router.push("/teacher");
        }
        if (data.user_data.type === "student") {
          router.push("/student");
        }
      })
      .catch((err) => {
        setUserData({ user_id: "", password: "" });
        errorToast(err.response.data.message);
      });
  };

  return (
    <div className="flex items-center w-full justify-center px-6 fixed top-[50%] -translate-y-1/2 ">
      <div className=" w-[400px]  ">
        <div className=" h-[450px]  rounded-3xl bg-white drop-shadow-2xl px-8 flex flex-col">
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
                value={userData.user_id}
                onChange={(e) => {
                  if (engAndNumRegexChecker(e.target.value)) {
                    setUserData({ ...userData, user_id: e.target.value });
                  }
                }}
                className="w-full h-12 px-3 bg-slate-100 rounded-xl focus:outline-blue-500 text-slate-500"
              />
              <p className="px-2 py-1 mt-2 text-sm text-slate-400">비밀번호</p>
              <input
                type="password"
                value={userData.password}
                onChange={(e) => {
                  setUserData({ ...userData, password: e.target.value });
                }}
                className="w-full h-12 px-3 border-0 focus:ring-0 bg-slate-100 rounded-xl focus:outline-blue-500 text-slate-500 focus:outline-offset-0"
              />
              <button className="w-full h-12 font-semibold text-white bg-blue-500 mt-14 rounded-xl">
                로그인
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}