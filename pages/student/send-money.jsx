import { useState } from "react";
import BottomNavBar from "../../components/student/BottomNavBar";

export default function StudentSendMoney() {
  const [receiver, SetReceiver] = useState();

  const [sendAmount, setSendAmount] = useState("");
  const [sendAmountUnComma, setSendAmountUnComma] = useState("");
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center bg-neutral-200">
      <div className="max-w-[800px] w-full bg-neutral-100 overflow-auto pb-32">
        <h1 className="mt-12 ml-6 text-4xl font-bold">송금</h1>
        <section className="w-full px-5 mt-8">
          <div className="font-semibold ">
            <div className="flex items-center ">
              <select
                onChange={(e) => {
                  SetReceiver(e.target.value);
                }}
                className="py-0 text-lg bg-transparent border-0 focus:ring-0 text-slate-600"
              >
                <option value="2501">2501 김홍록</option>
                <option value="2502">2502 김홍록</option>
                <option value="2503">2503 김홍록</option>
                <option value="2504">2504 김홍록</option>
              </select>
              <p className="text-lg text-slate-400">님 에게</p>
            </div>
            <p className="px-3 text-sm text-slate-400">
              출금 가능 금액 28,229,220원
            </p>
          </div>
          <div className="flex items-center mt-4">
            <input
              className="text-2xl font-semibold bg-transparent border-none focus:ring-0 text-slate-600"
              placeholder="얼마를 보낼까요?"
              value={sendAmount}
              type="tel"
              onChange={(e) => {
                e.target.value = e.target.value.replace(/\D/g, ""); //숫자 아닌 문자 입력방비
                e.target.value = e.target.value.replace(/\,/g, ""); //콤마 중복 방지를 위한 모든 콤마 제거
                setSendAmount(
                  e.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                );
                setSendAmountUnComma(e.target.value.replace(/\,/g, "")); //DB로 보내기 위한 UnComma 문자열
              }}
            />
            <p className="w-full">원</p>
          </div>
        </section>
        <BottomNavBar />
      </div>
    </div>
  );
}
