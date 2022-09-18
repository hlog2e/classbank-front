import TSideBar from "../../components/teacher/TSideBar";
import HomePanel from "../../components/teacher/home/HomePanel";
import HomeHeader from "../../components/teacher/home/HomeHeader";
import { useEffect, useState } from "react";
import HomeNotice from "../../components/teacher/home/HomeNotice";
import AuthRoute from "../../middlewares/AuthRoute";
import { getTeacherBankInfo } from "../../apis/bank";

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
  //이것도 더미
  const [noticeData, setNoticeData] = useState([
    {
      key: "asdfdsfsd-123123-231",
      title: "1차 업데이트 패치노트",
      index: "가나다라마바사아자차카타파하",
      date: "2022-02-07",
    },
    {
      key: "fdalsjkfj9001-12332221123",
      title: "2차 업데이트 패치노트",
      index: "가나다라마바사아자차카타파하213123123",
      date: "2022-02-08",
    },
    {
      key: "fdalsjkfj9001-1233232121123",
      title: "2차 업데이트 패치노트",
      index: "33890120932830291",
      date: "2022-02-08",
    },
    {
      key: "fdalsjkfj9001-1233213321123",
      title: "2차 업데이트 패치노트",
      index: "가나다라마바사아자차카타파하아리만린알ㅇㄹ니",
      date: "2022-02-08",
    },
    {
      key: "fdalsjkfj9001-1223123321123",
      title: "2차 업데이트 패치노트",
      index: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      date: "2022-02-08",
    },
    {
      key: "fdalsjkfj9001-123321123",
      title: "2차 업데이트 패치노트",
      index: "가나다라마바사아자차카타파하",
      date: "2022-02-08",
    },
    {
      key: "fdalsjkfj9001-123321123",
      title: "2차 업데이트 패치노트",
      index: "가나다라마바사아자차카타파하",
      date: "2022-02-08",
    },
  ]);

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
