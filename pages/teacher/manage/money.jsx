import { useState } from "react";
import BalanceChangePanel from "../../../components/teacher/manage/money/BalanceChangePanel";
import TSideBar from "../../../components/teacher/TSideBar";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import StudentSelectList from "../../../components/teacher/manage/money/StudentSelectList";

export default function Money() {
  const [selectedStudents, setSelectedStudents] = useState([
    { studentId: "dsfdfldfdf", studentName: "김홍록" },
  ]);

  return (
    <div className="flex flex-col h-screen lg:flex-row bg-neutral-100">
      <TSideBar />
      <section className="flex flex-col overflow-scroll w-full lg:w-[calc(100vw-288px)]  ">
        <BalanceChangePanel selectedStudents={selectedStudents} />
        <StudentSelectList />
      </section>
    </div>
  );
}
