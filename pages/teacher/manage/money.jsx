import { useState } from "react";
import BalanceChangePanel from "../../../components/teacher/manage/money/BalanceChangePanel";
import TSideBar from "../../../components/teacher/TSideBar";
import StudentSelectList from "../../../components/teacher/manage/money/StudentSelectList";
import AuthRoute from "../../middlewares/AuthRoute";

export default function Money() {
  const [selectedStudent, setSelectedStudents] = useState([]);

  function handleSelectedStudents(_selId, _selStudentName) {
    if (selectedStudent.some((item) => item.id === _selId)) {
      setSelectedStudents(
        selectedStudent.filter((item) => {
          return item.id !== _selId;
        })
      );
    } else {
      setSelectedStudents([
        ...selectedStudent,
        { id: _selId, studentName: _selStudentName },
      ]);
    }
  }

  function handleSelectAll(_isSelectedAllState) {
    if (_isSelectedAllState) {
      setSelectedStudents(
        studentsData.map((item) => {
          return { id: item.id, studentName: item.name };
        })
      );
    } else {
      setSelectedStudents([]);
    }
  }
  //더미데이터
  const [studentsData, setStudentsData] = useState([
    {
      id: "d66fd2ec-0a5c-4803-a1ef-5b9e0ecfc845",
      number: 2501,
      name: "김홍록",
      balance: "1000000",
    },
    {
      id: "08074c49-578f-4721-9c2e-187b2ccda8da",
      number: 2505,
      name: "김홍록",
      balance: "5000000",
    },
    {
      id: "a2dd25c1-cd39-4367-b0d6-cece8a5179b9",
      number: 2504,
      name: "김홍록",
      balance: "40000000",
    },
    {
      id: "d54839c4-063f-4ff2-8383-e989abf41426",
      number: 2503,
      name: "김홍록",
      balance: "3000000",
    },
    {
      id: "15b50718-fcbc-43b1-acae-85a71a836a84",
      number: 2502,
      name: "김홍록",
      balance: "2000000",
    },
  ]);

  return (
    <AuthRoute>
      <div className="flex flex-col lg:flex-row bg-neutral-100">
        <TSideBar />
        <section className="flex flex-col w-full overflow-scroll lg:ml-64 xl:flex-row ">
          <BalanceChangePanel selectedStudent={selectedStudent} />
          <StudentSelectList
            studentsData={studentsData}
            selectedStudent={selectedStudent}
            handleSelectedStudents={handleSelectedStudents}
            handleSelectAll={handleSelectAll}
          />
        </section>
      </div>
    </AuthRoute>
  );
}
