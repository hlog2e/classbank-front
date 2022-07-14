import BottomNavBar from "../../components/student/BottomNavBar";
import BalanceDisplay from "../../components/student/home/BalanceDisplay";
import { useState } from "react";
import BalanceLogsPanel from "../../components/student/home/BalanceLogsPanel";

export default function StudentHome() {
  const [bankInfo, setBancInfo] = useState({
    bankName: "소영은행",
    moneyName: "원",
  });
  const [accountData, setAccountData] = useState({
    name: "김홍록",
    balance: "200000000000",
  });
  const [balanceLogs, setBalanceLogs] = useState([
    {
      senderName: "선생님",
      receiverName: "김홍록",
      transactionType: "plus",
      price: "10000",
      reason: "송금하기",
    },
    {
      senderName: "김홍록",
      receiverName: "학생1",
      transactionType: "minus",
      price: "20000",
      reason: "송금하기",
    },
  ]);

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center bg-neutral-200">
      <div className="max-w-[800px] w-full bg-neutral-100 overflow-auto pb-32">
        <BottomNavBar />
        <BalanceDisplay bankInfo={bankInfo} accountData={accountData} />
        <BalanceLogsPanel bankInfo={bankInfo} balanceLogs={balanceLogs} />
      </div>
    </div>
  );
}
