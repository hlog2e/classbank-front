import { useState } from "react";
import BottomNavBar from "../../components/student/BottomNavBar";
import AuthRoute from "../../middlewares/AuthRoute";
import { comma } from "../../utils/comma";

export default function StudentSendMoney() {
  //서버로 부터 받아온 데이터들
  const [bankInfo, setBancInfo] = useState({
    bankName: "소영은행",
    moneyName: "원",
  });
  const [accountData, setAccountData] = useState({
    name: "김홍록",
    balance: "200000000000",
  });
  const [classStudentsList, setClassStudentsList] = useState([
    {
      id: "d66fd2ec-0a5c-4803-a1ef-5b9e0ecfc845",
      number: 2501,
      name: "김홍록",
    },
    {
      id: "d66fd2ec-0a5c-4803-a1efd-5b9e0ecfc845",
      number: 2502,
      name: "김홍록",
    },
    {
      id: "d66fd2ec-0a5c-4803-a1ef-5ddb9e0ecfc845",
      number: 2503,
      name: "김홍록",
    },
  ]);

  //서버로 전송될 데이터들
  const [receiver, SetReceiver] = useState();
  const [sendAmount, setSendAmount] = useState("");

  return (
    <AuthRoute isTeacherPage={false}>
      <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center bg-neutral-200">
        <div className="max-w-[800px] w-full bg-neutral-100 overflow-auto pb-32">
          <h1 className="mt-12 ml-6 text-4xl font-bold">송금</h1>
          <section className="w-full h-full px-5 mt-8 ">
            <div className="font-semibold ">
              <div className="flex items-center ">
                <select
                  onChange={(e) => {
                    SetReceiver(e.target.value);
                  }}
                  className="py-0 pl-0 text-lg bg-transparent border-0 focus:ring-0 text-slate-600"
                >
                  {classStudentsList.map((e) => {
                    return (
                      <option key={e.id} value={e.id}>
                        {e.number} {e.name}
                      </option>
                    );
                  })}
                </select>
                <p className="text-lg text-slate-400">님 에게</p>
              </div>
              <p className="text-sm text-slate-400">
                출금 가능 금액 {comma(accountData.balance)}
                {bankInfo.moneyName}
              </p>
            </div>
            <div className="flex items-center mt-8 ">
              <input
                className="p-0 text-2xl font-semibold bg-transparent border-none focus:ring-0 text-slate-600"
                placeholder="얼마를 보낼까요?"
                value={sendAmount}
                type="tel"
                onChange={(e) => {
                  setSendAmount(comma(e.target.value));
                }}
              />
            </div>

            <p className=" text-slate-400">
              <strong>{bankInfo.moneyName}</strong> 을(를) 보냅니다.
            </p>
            <button className="w-full mt-20 font-semibold text-white bg-blue-500 bottom-28 h-14 rounded-2xl">
              송금하기
            </button>
          </section>
          <BottomNavBar />
        </div>
      </div>
    </AuthRoute>
  );
}
