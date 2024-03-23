import { useState } from "react";
import { errorToast } from "../utils/toast";
import { useRouter } from "next/router";
import { postChangeStudentPassword } from "../apis/auth";

export default function PasswordReset() {
  const router = useRouter();

  const [inputDatas, setInputDatas] = useState({
    oldPassword: null,
    newPassword: null,
    newPassword2: null,
  });

  const handleChangePasswordPOST = async () => {
    if (
      !inputDatas.oldPassword ||
      !inputDatas.newPassword ||
      !inputDatas.newPassword2
    ) {
      return errorToast("빈 항목을 확인해주세요!");
    }

    if (inputDatas.newPassword !== inputDatas.newPassword2) {
      return errorToast(
        "새로운 비밀번호를 확인해주세요! (새로운 비밀번호 두개가 일치하지 않음)"
      );
    }

    try {
      await postChangeStudentPassword({
        oldPassword: inputDatas.oldPassword,
        newPassword: inputDatas.newPassword,
      });

      router.push("/app");
    } catch (err) {
      errorToast(err?.response?.data?.message);
    }
  };
  return (
    <div className="flex justify-center w-screen h-screen bg-slate-100">
      <div className="flex-1 h-screen max-w-xl px-4 py-20 bg-white">
        <p className="text-xl font-semibold">비밀번호를 변경해주세요!</p>
        <p className="text-sm font-extralight text-slate-400">
          회원님의 안전을 위해 새로운 비밀번호를 만들어주세요!
        </p>

        <div className="flex flex-col justify-between h-full">
          <div>
            <p className="mt-6 text-xs text-slate-400">이전 비밀번호</p>
            <input
              type="password"
              onChange={(e) => {
                setInputDatas((_prev) => ({
                  ..._prev,
                  oldPassword: e.target.value,
                }));
              }}
              className="w-full h-10 px-2 mt-1 text-sm border rounded-lg text-slate-500 outline-blue-500 border-slate-200"
            />

            <p className="mt-10 text-xs text-slate-400">새로운 비밀번호</p>
            <input
              type="password"
              onChange={(e) => {
                setInputDatas((_prev) => ({
                  ..._prev,
                  newPassword: e.target.value,
                }));
              }}
              className="w-full h-10 px-2 mt-1 text-sm border rounded-lg text-slate-500 outline-blue-500 border-slate-200"
            />
            <p className="mt-2 text-xs text-slate-400">새로운 비밀번호 확인</p>
            <input
              type="password"
              onChange={(e) => {
                setInputDatas((_prev) => ({
                  ..._prev,
                  newPassword2: e.target.value,
                }));
              }}
              className="w-full h-10 px-2 mt-1 text-sm border rounded-lg text-slate-500 outline-blue-500 border-slate-200"
            />
          </div>

          <button
            onClick={handleChangePasswordPOST}
            className="w-full h-10 mt-4 text-sm font-semibold text-white bg-blue-400 rounded-xl"
          >
            변경하기
          </button>
        </div>
      </div>
    </div>
  );
}
