import StudentTable from "../../../components/teacher/manage/student/StudentTable";
import TSideBar from "../../../components/teacher/TSideBar";
import { useState } from "react";
import AuthRoute from "../../../middlewares/AuthRoute";

export default function Student() {
  const [selectedStudent, setSelectedStudents] = useState([]);
  function handleSelectedStudents(_selId) {
    if (selectedStudent.some((item) => item.id === _selId)) {
      setSelectedStudents(
        selectedStudent.filter((item) => {
          return item.id !== _selId;
        })
      );
    } else {
      setSelectedStudents([...selectedStudent, { id: _selId }]);
    }
  }

  function handleSelectAll(_isSelectedAllState) {
    if (_isSelectedAllState) {
      setSelectedStudents(
        studentsInfo.map((item) => {
          return { id: item.id };
        })
      );
    } else {
      setSelectedStudents([]);
    }
  }

  //더미데이터
  const [studentsInfo, setStudentsInfo] = useState([
    {
      id: "d66fd2ec-0a5c-4803-a1ef-5b9e0ecfc845",
      number: 2501,
      name: "김홍록",
      userId: "ebs5231",
      phoneNumber: "01073115490",
      accountCreated: "2022-02-07",
    },
    {
      id: "08074c49-578f-4721-9c2e-187b2ccda8da",
      number: 2505,
      name: "김홍록",
      userId: "ebs5231",
      phoneNumber: "01072115490",
      accountCreated: "2022-02-07",
    },
    {
      id: "a2dd25c1-cd39-4367-b0d6-cece8a5179b9",
      number: 2504,
      name: "김홍록",
      userId: "ebs5231",
      phoneNumber: "01072115490",
      accountCreated: "2022-02-07",
    },
    {
      id: "d54839c4-063f-4ff2-8383-e989abf41426",
      number: 2503,
      name: "김홍록",
      userId: "ebs5231",
      phoneNumber: "01072115490",
      accountCreated: "2022-02-07",
    },
    {
      id: "15b50718-fcbc-43b1-acae-85a71a836a84",
      number: 2502,
      name: "김홍록",
      userId: "ebs5231",
      phoneNumber: "01072115490",
      accountCreated: "2022-02-07",
    },
  ]);

  return (
    <AuthRoute>
      <div className="flex flex-col lg:flex-row bg-neutral-100">
        <TSideBar />
        <section className="w-full overflow-scroll lg:ml-64 ">
          <section>
            <h1 className="px-10 mt-16 text-5xl font-bold lg:mt-20 lg:px-20">
              학생 관리
            </h1>
          </section>
          <StudentTable
            studentsInfo={studentsInfo}
            selectedStudent={selectedStudent}
            handleSelectedStudents={handleSelectedStudents}
            handleSelectAll={handleSelectAll}
          />
        </section>
      </div>
    </AuthRoute>
  );
}
