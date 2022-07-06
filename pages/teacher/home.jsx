import TSideBar from "../../components/teacher/TSideBar";
import HomePanel from "../../components/teacher/home/HomePanel";
import HomeHeader from "../../components/teacher/home/HomeHeader";
import { useEffect, useState } from "react";
import HomeNotice from "../../components/teacher/home/HomeNotice";

export default function TeacherHome() {
  //API 연결전까지 더미데이터
  const [panelData, setPanelData] = useState({
    moneyName: "메소",
    sellingItemCount: "15",
    pendingBuyItemCount: "2",
    eza: "10",
    ezaTerm: "7",
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
      key: "fdalsjkfj9001-123321123",
      title: "2차 업데이트 패치노트",
      index: "가나다라마바사아자차카타파하213123123",
      date: "2022-02-08",
    },
    {
      key: "fdalsjkfj9001-123321123",
      title: "2차 업데이트 패치노트",
      index: "33890120932830291",
      date: "2022-02-08",
    },
    {
      key: "fdalsjkfj9001-123321123",
      title: "2차 업데이트 패치노트",
      index: "가나다라마바사아자차카타파하아리만린알ㅇㄹ니",
      date: "2022-02-08",
    },
    {
      key: "fdalsjkfj9001-123321123",
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
    console.log(panelData);
  }, [panelData]);
  return (
    <div className="flex flex-col h-screen lg:flex-row bg-neutral-100">
      <TSideBar />
      <section className="flex flex-col w-full overflow-scroll lg:w-[calc(100vw-256px)]">
        <HomeHeader />
        <HomePanel panelData={panelData} setPanelData={setPanelData} />
        <HomeNotice noticeData={noticeData} />
      </section>
    </div>
  );
}
