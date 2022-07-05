import { useState } from "react";

export default function BalanceChangePanel(props) {
  const [changeBalanceAmout, setChangeBalanceAmount] = useState("");
  const [changeBalanceAmoutUnComma, setChangeBalanceAmountUnComma] =
    useState("");

  const [changeBalanceType, setChangeBalanceType] = useState("plus");

  let selectedArray = [];
  props.selectedStudent.map((_item) => {
    selectedArray.push(_item.studentName);
  });

  return (
    <section className="">
      <h1 className="px-12 mt-6 text-2xl font-bold text-gray-400 md:px-20 md:text-3xl md:mt-20">
        {selectedArray.join(", ")}
      </h1>
      <div className="flex flex-col px-12 md:px-20  max-w-[450px] md:w-[450px]">
        <h1 className="mt-6 text-4xl font-bold md:text-5xl">학생(들) 에게</h1>
        <div className="flex mt-5">
          <input
            className="w-48 text-3xl font-bold bg-transparent border-b-4 md:text-4xl focus:outline-none"
            value={changeBalanceAmout}
            onChange={(e) => {
              e.target.value = e.target.value.replace(/\D/g, ""); //숫자 아닌 문자 입력방비
              e.target.value = e.target.value.replace(/\,/g, ""); //콤마 중복 방지를 위한 모든 콤마 제거
              setChangeBalanceAmount(
                e.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              );
              setChangeBalanceAmountUnComma(e.target.value.replace(/\,/g, "")); //DB로 보내기 위한 UnComma 문자열
            }}
          />
          <h1 className="text-4xl font-bold md:text-5xl ">원을 </h1>
        </div>
        <div className="mt-6">
          <button
            onClick={() => {
              setChangeBalanceType("plus");
            }}
            className={
              "px-2 py-1 text-2xl md:text-4xl font-bold rounded-xl bg-slate-200 hover:bg-slate-300 hover:shadow" +
              (changeBalanceType === "plus"
                ? " bg-slate-300 text-blue-500"
                : "")
            }
          >
            지급
          </button>
          <button
            className={
              "px-2 py-1 ml-2 text-2xl md:text-4xl font-bold rounded-xl bg-slate-200 hover:bg-slate-300 hover:shadow" +
              (changeBalanceType === "minus"
                ? " bg-slate-300 text-red-500"
                : "")
            }
            onClick={() => {
              setChangeBalanceType("minus");
            }}
          >
            회수
          </button>
        </div>

        <h1 className="mt-5 text-4xl font-bold md:text-5xl">합니다.</h1>

        <input
          placeholder="사유 :"
          className="w-48 mt-8 text-2xl font-bold bg-transparent border-b-4 md:text-3xl focus:outline-none"
        />

        <button className="w-full py-3 font-semibold text-white bg-blue-500 mt-14 rounded-xl">
          {changeBalanceType === "plus" ? "지급" : "회수"} 하기
        </button>
      </div>
    </section>
  );
}
