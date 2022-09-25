import { useState } from "react";
import { comma, unComma } from "../../../../utils/comma";
import { postChangeBalanceTeacher } from "../../../../apis/money";
import { errorToast, sucessToast } from "../../../../utils/toast";

export default function BalanceChangePanel(props) {
  const [changeBalanceAmout, setChangeBalanceAmount] = useState("");
  const [changeBalanceType, setChangeBalanceType] = useState("plus");
  const [changeBalanceReason, setChangeBalanceReason] = useState("");

  let selectedName = [];
  props.selectedStudent.map((_item) => {
    selectedName.push(_item.name);
  });

  const handlePostBalanceChange = async () => {
    for await (const _selItem of props.selectedStudent) {
      try {
        const res = await postChangeBalanceTeacher(
          _selItem.user_uuid,
          changeBalanceType,
          unComma(changeBalanceAmout),
          changeBalanceReason
        );
        sucessToast(res.message);
        props.getDataFromBackend();
      } catch (err) {
        console.log(err);
        if (err.response.data) {
          errorToast(err.response.data.message);
        } else {
          errorToast(
            _selItem.name + "학생의 잔액 변경 도중 오류가 발생하였습니다."
          );
        }
      }
    }
  };
  return (
    <section className="">
      <h1 className="px-12 mt-6 text-2xl font-bold text-gray-400 md:px-20 md:text-3xl md:mt-20">
        {selectedName.join(", ")}
      </h1>
      <div className="flex flex-col px-12 md:px-20  max-w-[500px] md:w-[500px]">
        <h1 className="mt-6 text-3xl font-bold md:text-4xl">학생(들) 에게</h1>
        <div className="flex items-center mt-5 ">
          <input
            className="text-3xl font-bold bg-transparent border-b-4 w-36 md:text-4xl focus:outline-none"
            value={changeBalanceAmout}
            onChange={(e) => {
              setChangeBalanceAmount(comma(e.target.value));
            }}
          />
          <h1 className="text-3xl font-bold md:text-4xl">
            {props.bankData.money_name}
          </h1>
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

        <h1 className="mt-5 text-3xl font-bold md:text-4xl">합니다.</h1>

        <input
          placeholder="사유 :"
          value={changeBalanceReason}
          onChange={(e) => {
            setChangeBalanceReason(e.target.value);
          }}
          className="w-48 mt-8 text-2xl font-bold bg-transparent border-b-4 text-slate-400 md:text-3xl focus:outline-none"
        />

        <button
          onClick={handlePostBalanceChange}
          className="w-full py-3 font-semibold text-white bg-blue-500 mt-14 rounded-xl"
        >
          {changeBalanceType === "plus" ? "지급" : "회수"} 하기
        </button>
      </div>
    </section>
  );
}
