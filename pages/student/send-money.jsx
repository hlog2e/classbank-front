import { useEffect, useState } from "react";
import BottomNavBar from "../../components/student/BottomNavBar";
import AuthRoute from "../../middlewares/AuthRoute";
import { comma, numToStringAndComma, unComma } from "../../utils/comma";
import { getBankInfoStudent } from "../../apis/bank";
import { getSameBankStudents, getUserInfoStudent } from "../../apis/user";
import { postSendMoney } from "../../apis/money";
import { errorToast, sucessToast } from "../../utils/toast";

export default function StudentSendMoney() {
  //서버로 부터 받아온 데이터들
  const [bankInfo, setBankInfo] = useState({});
  const [accountData, setAccountData] = useState({});
  const [students, setStudents] = useState([]);

  const getDataFromDB = async () => {
    const _bankData = await getBankInfoStudent();
    setBankInfo(_bankData);

    const _userData = await getUserInfoStudent();
    setAccountData(_userData);

    const _students = await getSameBankStudents();
    setStudents(_students);
  };

  useEffect(() => {
    getDataFromDB();
  }, []);
  //서버로 전송될 데이터들
  const [receiver, setReceiver] = useState(0);
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
                  value={receiver}
                  onChange={(e) => {
                    setReceiver(e.target.value);
                  }}
                  className="py-0 pl-0 text-lg bg-transparent border-0 focus:ring-0 text-slate-600"
                >
                  <option value="0" disabled>
                    학생 선택
                  </option>
                  {students.map((e) => {
                    return (
                      <option key={e.user_uuid} value={e.user_uuid}>
                        {e.number} {e.name}
                      </option>
                    );
                  })}
                </select>
                <p className="text-lg text-slate-400">님 에게</p>
              </div>
              <p className="text-sm text-slate-400">
                출금 가능 금액 {numToStringAndComma(accountData.balance)}
                {bankInfo.money_name}
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
              <strong>{bankInfo.money_name}</strong> 을(를) 보냅니다.
            </p>
            <button
              onClick={() => {
                postSendMoney(receiver, unComma(sendAmount))
                  .then((data) => {
                    sucessToast(data.message);
                    setReceiver(0);
                    setSendAmount("");
                    getDataFromDB();
                  })
                  .catch((err) => {
                    console.log(err);
                    if (err.response.data) {
                      errorToast(err.response.data.message);
                    } else {
                      errorToast("송금 도중 오류가 발생하였습니다.");
                    }
                  });
              }}
              className="w-full mt-20 font-semibold text-white bg-blue-500 bottom-28 h-14 rounded-2xl"
            >
              송금하기
            </button>
          </section>
          <BottomNavBar />
        </div>
      </div>
    </AuthRoute>
  );
}
