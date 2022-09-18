import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { postJoin } from "../apis/auth";
import Logo from "../components/Logo";
import {
  lowEngAndNumRegexChecker,
  korAndEngRegexChecker,
  numRegexChecker,
} from "../utils/regex";
import { errorToast } from "../utils/toast";

export default function Join() {
  const router = useRouter();
  const [userData, setUserData] = useState({
    user_id: "",
    password: "",
    name: "",
    phone_number: "",
    type: "student",
    class_code: "",
  });

  const handleJoin = async (e) => {
    e.preventDefault();
    try {
      const user_data = await postJoin(userData);
      if (user_data.type === "teacher") {
        router.push("/teacher");
      }
      if (user_data.type === "student") {
        router.push("/student");
      }
    } catch (err) {
      console.log(err);
      if (err.response.data) {
        errorToast(err.response.data.message);
      } else {
        errorToast("회원가입 중 오류가 발생하였습니다.");
      }
    }
  };
  return (
    <div className="flex items-center justify-center w-full h-full px-6 py-12 ">
      <div className="flex flex-col max-w-[400px] w-full px-8 bg-white rounded-3xl drop-shadow-2xl">
        <div className="flex items-center justify-between py-5 text-lg">
          <Logo />
          <Link href="/login">
            <a className="text-sm text-blue-400">로그인</a>
          </Link>
        </div>
        <form onSubmit={handleJoin}>
          <h1 className="mt-6 text-3xl font-semibold ">회원가입</h1>
          <div className="py-6">
            <section>
              <div className="flex items-center justify-between w-full font-semibold h-9 rounded-2xl bg-slate-100 text-slate-400">
                <div
                  onClick={() => {
                    setUserData({ ...userData, type: "student" });
                  }}
                  className={classNames(
                    "w-full mx-4 rounded-xl text-center",
                    userData.type === "student" ? "bg-white shadow-lg" : null
                  )}
                >
                  학생
                </div>
                <div
                  onClick={() => {
                    setUserData({ ...userData, type: "teacher" });
                  }}
                  className={classNames(
                    "w-full mx-4 rounded-xl text-center",
                    userData.type === "teacher" ? "bg-white shadow-lg" : null
                  )}
                >
                  선생님
                </div>
              </div>
            </section>
            <section className="mt-4">
              <p className="px-2 py-1 text-sm text-slate-400">아이디</p>
              <input
                type="text"
                value={userData.user_id}
                onChange={(e) => {
                  if (lowEngAndNumRegexChecker(e.target.value)) {
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
            </section>
            <hr className="w-full mt-8" />
            <section className="mt-4">
              <p className="px-2 py-1 text-sm text-slate-400">이름</p>
              <input
                type="text"
                value={userData.name}
                onChange={(e) => {
                  if (korAndEngRegexChecker(e.target.value)) {
                    setUserData({ ...userData, name: e.target.value });
                  }
                }}
                className="w-full h-12 px-3 border-none bg-slate-100 rounded-xl text-slate-500 focus:ring-1 focus:ring-blue-500"
              />
              <p className="px-2 py-1 mt-2 text-sm text-slate-400">전화번호</p>
              <input
                type="tel"
                value={userData.phone_number}
                onChange={(e) => {
                  if (numRegexChecker(e.target.value)) {
                    setUserData({ ...userData, phone_number: e.target.value });
                  }
                }}
                className="w-full h-12 px-3 border-none bg-slate-100 rounded-xl text-slate-500 focus:ring-1 focus:ring-blue-500"
              />
            </section>
            <hr className="w-full mt-8" />
            <section>
              <p className="px-2 py-1 mt-4 text-sm text-slate-400">학급코드</p>
              <input
                type="tel"
                value={userData.class_code}
                onChange={(e) => {
                  if (numRegexChecker(e.target.value)) {
                    setUserData({ ...userData, class_code: e.target.value });
                  }
                }}
                className="w-full h-12 px-3 border-none bg-slate-100 rounded-xl text-slate-500 focus:ring-1 focus:ring-blue-500"
              />
            </section>
            <button className="w-full h-12 mt-8 font-semibold text-white bg-blue-500 rounded-xl">
              가입하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
