import BottomNavBar from "../../components/student/BottomNavBar";
import BalanceDisplay from "../../components/student/home/BalanceDisplay";
import { useEffect, useState } from "react";
import BalanceLogsPanel from "../../components/student/home/BalanceLogsPanel";
import AuthRoute from "../../middlewares/AuthRoute";
import { getUserInfoStudent } from "../../apis/user";
import { getBankInfoStudent } from "../../apis/bank";

export default function StudentHome() {
  const [accountData, setAccountData] = useState({});
  const [bankInfo, setBankInfo] = useState({});

  const [balanceLogs, setBalanceLogs] = useState([
    {
      id: "dsfafasd",
      senderName: "선생님",
      receiverName: "김홍록",
      transactionType: "plus",
      price: "10000",
      reason: "송금하기",
      timestamp: 1657848366,
    },
    {
      id: "dsadfssdfsfsf",
      senderName: "김홍록",
      receiverName: "학생1",
      transactionType: "minus",
      price: "20000",
      reason: "송금하기",
      timestamp: 1657848366,
    },
  ]);

  const getDataFromBackend = async () => {
    const userData = await getUserInfoStudent();
    setAccountData(userData);

    const bankData = await getBankInfoStudent();
    setBankInfo(bankData);
  };

  useEffect(() => {
    getDataFromBackend();
  }, []);

  return (
    <AuthRoute isTeacherPage={false}>
      <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center bg-neutral-200">
        <div className="max-w-[800px] w-full bg-neutral-100 overflow-auto pb-32">
          <h1 className="mt-12 ml-6 w-fit text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#56CCF2] to-[#2F80ED]">
            {bankInfo.name}
          </h1>
          <BalanceDisplay bankInfo={bankInfo} accountData={accountData} />
          <BalanceLogsPanel bankInfo={bankInfo} balanceLogs={balanceLogs} />
          <BottomNavBar />
        </div>
      </div>
    </AuthRoute>
  );
}
