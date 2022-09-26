import BottomNavBar from "../../components/student/BottomNavBar";
import BalanceDisplay from "../../components/student/home/BalanceDisplay";
import { useEffect, useState } from "react";
import BalanceLogsPanel from "../../components/student/home/BalanceLogsPanel";
import AuthRoute from "../../middlewares/AuthRoute";
import { getUserInfoStudent } from "../../apis/user";
import { getBankInfoStudent } from "../../apis/bank";
import { getAllbalanceLogs } from "../../apis/log";

export default function StudentHome() {
  const [accountData, setAccountData] = useState({});
  const [bankInfo, setBankInfo] = useState({});

  const [balanceLogs, setBalanceLogs] = useState([]);

  const getDataFromBackend = async () => {
    const _userData = await getUserInfoStudent();
    setAccountData(_userData);

    const _bankData = await getBankInfoStudent();
    setBankInfo(_bankData);

    const _balanceLogs = await getAllbalanceLogs();
    setBalanceLogs(_balanceLogs);
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
          <BalanceLogsPanel
            bankInfo={bankInfo}
            balanceLogs={balanceLogs}
            accountData={accountData}
          />
          <BottomNavBar />
        </div>
      </div>
    </AuthRoute>
  );
}
