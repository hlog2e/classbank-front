import TSideBar from "../../components/teacher/TSideBar";
import HomePanel from "../../components/teacher/home/HomePanel";
import HomeHeader from "../../components/teacher/home/HomeHeader";
import { useEffect, useState } from "react";

export default function TeacherHome() {
  //API 연결전까지 더미데이터
  const [panelData, setPanelData] = useState({
    moneyName: "메소",
    sellingItemCount: "15",
    pendingBuyItemCount: "2",
    eza: "10",
    ezaTerm: "7",
  });

  useEffect(() => {
    console.log(panelData);
  }, [panelData]);
  return (
    <div className="flex flex-col h-screen lg:flex-row bg-neutral-100">
      <TSideBar />
      <section className="flex flex-col w-full lg:w-[calc(100vw-288px)] h-full ">
        <HomeHeader />
        <HomePanel panelData={panelData} setPanelData={setPanelData} />
      </section>
    </div>
  );
}
