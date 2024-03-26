import StudentTable from "../../../components/teacher/manage/student/StudentTable";
import TSideBar from "../../../components/teacher/TSideBar";
import { useEffect, useState } from "react";
import AuthRoute from "../../../middlewares/AuthRoute";
import { getAllUserTeacher } from "../../../apis/user";
import { getTeacherBankInfo } from "../../../apis/bank";

export default function Student() {
  const [studentsInfo, setStudentsInfo] = useState([]);
  const [selectedStudent, setSelectedStudents] = useState([]);

  function handleSelectedStudents(_selId) {
    if (selectedStudent.some((item) => item.user_uuid === _selId)) {
      setSelectedStudents(
        selectedStudent.filter((item) => {
          return item.user_uuid !== _selId;
        })
      );
    } else {
      setSelectedStudents([...selectedStudent, { user_uuid: _selId }]);
    }
  }

  function handleSelectAll(_isSelectedAllState) {
    if (_isSelectedAllState) {
      setSelectedStudents(
        studentsInfo.map((item) => {
          return { user_uuid: item.user_uuid };
        })
      );
    } else {
      setSelectedStudents([]);
    }
  }

  const fetchPageData = async () => {
    const bankData = await getTeacherBankInfo();
    const users = await getAllUserTeacher(bankData.id);

    setStudentsInfo(users);
  };

  useEffect(() => {
    fetchPageData();
  }, []);

  return (
    <AuthRoute isTeacherPage={true}>
      <div className="flex flex-col lg:flex-row bg-neutral-100">
        <TSideBar />
        <section className="w-full overflow-scroll lg:ml-64 ">
          <section>
            <h1 className="mt-16 ml-10 text-5xl font-bold ">학생 관리</h1>
          </section>
          <StudentTable
            refetch={fetchPageData}
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
