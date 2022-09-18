import TSideBar from "../../components/teacher/TSideBar";
import HomePanel from "../../components/teacher/home/HomePanel";
import HomeHeader from "../../components/teacher/home/HomeHeader";
import { useEffect, useState } from "react";
import HomeNotice from "../../components/teacher/home/HomeNotice";
import AuthRoute from "../../middlewares/AuthRoute";
import { getTeacherBankInfo } from "../../apis/bank";
import { getAllNotices } from "../../apis/notice";

export default function TeacherHome() {
  const [bankId, setBankId] = useState("");
  const [bankName, setBankName] = useState("은행");
  const [panelData, setPanelData] = useState({
    moneyName: "",
    pendingBuyItemCount: "",
    eza: "",
    ezaTerm: "",
    nextEzaDay: "",
    classCode: "",
  });
  const [noticeData, setNoticeData] = useState([]);

  useEffect(() => {
    getTeacherBankInfo().then((bankData) => {
      setBankId(bankData.id);
      setBankName(bankData.name);
      setPanelData({
        ...panelData,
        moneyName: bankData.money_name,
        eza: bankData.eza,
        ezaTerm: bankData.eza_term,
        nextEzaDay: bankData.next_eza_date,
        classCode: bankData.class_code,
      });
    });
    getAllNotices().then((notices) => {
      setNoticeData(notices);
    });
  }, []);
  return (
    <AuthRoute isTeacherPage={true}>
      <div className="flex flex-col lg:flex-row bg-neutral-100">
        <TSideBar />
        <section className="flex flex-col w-full overflow-scroll lg:lg:ml-64 ">
          <HomeHeader
            bankName={bankName}
            setBankName={setBankName}
            bankId={bankId}
          />
          <HomePanel
            panelData={panelData}
            setPanelData={setPanelData}
            bankId={bankId}
          />
          <HomeNotice noticeData={noticeData} />
        </section>
      </div>
    </AuthRoute>
  );
}
