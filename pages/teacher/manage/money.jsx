import { useEffect, useState } from "react";
import BalanceChangePanel from "../../../components/teacher/manage/money/BalanceChangePanel";
import TSideBar from "../../../components/teacher/TSideBar";
import StudentSelectList from "../../../components/teacher/manage/money/StudentSelectList";
import AuthRoute from "../../../middlewares/AuthRoute";
import { getAllUserTeacher } from "../../../apis/user";
import { getTeacherBankInfo } from "../../../apis/bank";

export default function Money() {
  const [bankData, setBankData] = useState({ money_name: "" });
  const [studentsData, setStudentsData] = useState([]);
  const [selectedStudent, setSelectedStudents] = useState([]);

  function handleSelectedStudents(_selUUID, _selStudentName) {
    //selectedStudent Array 에 이미 user_uuid가 존재 할때 filter로 걸러내서 선택해제
    if (selectedStudent.some((item) => item.user_uuid === _selUUID)) {
      setSelectedStudents(
        selectedStudent.filter((item) => {
          return item.user_uuid !== _selUUID;
        })
      );
    } else {
      //selectedStudent Array 에 user_uuid가 없을 때 추가
      setSelectedStudents([
        ...selectedStudent,
        { user_uuid: _selUUID, name: _selStudentName },
      ]);
    }
  }

  //전체 선택
  function handleSelectAll(_isSelectedAllState) {
    if (_isSelectedAllState) {
      setSelectedStudents(
        studentsData.map((item) => {
          return { user_uuid: item.user_uuid, name: item.name };
        })
      );
    } else {
      setSelectedStudents([]);
    }
  }

  const getDataFromBackend = async () => {
    const _bankData = await getTeacherBankInfo();
    setBankData(_bankData);
    const _users = await getAllUserTeacher(_bankData.id);
    setStudentsData(_users);
  };

  useEffect(() => {
    getDataFromBackend();
  }, []);

  return (
    <AuthRoute isTeacherPage={true}>
      <div className="flex flex-col lg:flex-row bg-neutral-100">
        <TSideBar />
        <section className="flex flex-col w-full overflow-scroll lg:ml-64 xl:flex-row ">
          <BalanceChangePanel
            bankData={bankData}
            selectedStudent={selectedStudent}
            getDataFromBackend={getDataFromBackend}
          />
          <StudentSelectList
            bankData={bankData}
            studentsData={studentsData}
            setStudentsData={setStudentsData}
            selectedStudent={selectedStudent}
            handleSelectedStudents={handleSelectedStudents}
            handleSelectAll={handleSelectAll}
          />
        </section>
      </div>
    </AuthRoute>
  );
}
