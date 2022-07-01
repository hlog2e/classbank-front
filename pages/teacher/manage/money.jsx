import TSideBar from "../../../components/teacher/TSideBar";
import { useState } from "react";

export default function Money() {
  const [moneyChangeType, setMoneyChangeType] = useState("");
  return (
    <div className="flex flex-col h-screen lg:flex-row bg-neutral-100">
      <TSideBar />
      <section className="flex flex-col w-full lg:w-[calc(100vw-288px)] h-full ">
        <section className="flex flex-col px-20 py-28">
          <h1 className="text-3xl font-bold text-gray-400 ">
            김홍록, 김홍록, 김홍록, 김홍록
          </h1>
          <h1 className="mt-6 text-5xl font-bold">학생(들) 에게</h1>
          <div className="flex mt-5">
            <input className="w-48 text-4xl font-bold bg-transparent border-b-4 focus:outline-none" />
            <h1 className="text-5xl font-bold ">원을 </h1>
          </div>
          <div className="mt-6">
            <button
              onClick={() => {
                setMoneyChangeType("plus");
              }}
              className={
                "px-2 py-1 text-4xl font-bold rounded-xl bg-slate-200 hover:bg-slate-300 hover:shadow" +
                (moneyChangeType === "plus"
                  ? " bg-slate-300 text-blue-500"
                  : "")
              }
            >
              지급
            </button>
            <button
              className={
                "px-2 py-1 ml-2 text-4xl font-bold rounded-xl bg-slate-200 hover:bg-slate-300 hover:shadow" +
                (moneyChangeType === "minus"
                  ? " bg-slate-300 text-red-500"
                  : "")
              }
              onClick={() => {
                setMoneyChangeType("minus");
              }}
            >
              회수
            </button>
          </div>

          <h1 className="mt-5 text-5xl font-bold">합니다.</h1>
        </section>
      </section>
    </div>
  );
}
