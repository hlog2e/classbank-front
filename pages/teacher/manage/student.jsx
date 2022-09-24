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

  useEffect(() => {
    getTeacherBankInfo().then((_bankData) => {
      getAllUserTeacher(_bankData.id).then((_users) => setStudentsInfo(_users));
    });
  }, []);

  return (
    <AuthRoute isTeacherPage={true}>
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
