import moment from "moment";
import { useState } from "react";
import {
  postDeleteStudentByTeacher,
  postEditUserInfoTeacher,
  postResetPasswordByTeacher,
} from "../../../../apis/user";
import {
  korAndEngRegexChecker,
  lowEngAndNumRegexChecker,
  numRegexChecker,
} from "../../../../utils/regex";
import { sucessToast } from "../../../../utils/toast";

export default function StudentTable(props) {
  return (
    <section className="px-6 py-14 xl:px-20 xl:py-8">
      <p className="ml-3 text-2xl font-semibold text-slate-500">
        선택된 학생 {props.selectedStudent.length}명
      </p>
      <div className="mt-6 bg-white w-[900px] py-6 px-6 rounded-3xl drop-shadow-lg">
        <table className="w-full border-separate border-spacing-0">
          <thead className=" bg-slate-100">
            <tr className="h-12 border-b ">
              <th className="w-10 rounded-l-xl">
                <input
                  className="text-blue-400 rounded bg-slate-200 border-slate-400 focus:ring-blue-500"
                  type="checkbox"
                  onChange={(e) => {
                    props.handleSelectAll(e.target.checked);
                  }}
                  checked={
                    props.selectedStudent.length === props.studentsInfo.length
                  }
                ></input>
              </th>
              <th className="w-16">학번</th>
              <th className="w-24">이름</th>
              <th className="w-36">아이디</th>
              <th className="w-36">전화번호</th>
              <th className="w-32 ">가입일자</th>
              <th className="w-16 ">수정</th>
              <th className="w-40 ">비밀번호 초기화</th>
              <th className="w-28 rounded-r-xl">회원탈퇴</th>
            </tr>
          </thead>
          <tbody>
            {props.studentsInfo.map((item) => {
              return (
                <StudentTableItem
                  key={item.user_uuid}
                  refetch={props.refetch}
                  studentData={item}
                  selectedStudent={props.selectedStudent}
                  handleSelectedStudents={props.handleSelectedStudents}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function StudentTableItem(props) {
  const [editing, setEditing] = useState(false);
  const [studentData, setStudentData] = useState(props.studentData);

  function handleUpdateStudentInfo() {
    if (editing) {
      setEditing(false);
      postEditUserInfoTeacher(studentData.user_uuid, studentData).then(() => {
        sucessToast(studentData.name + " 학생의 데이터 수정을 완료했습니다.");
      });
    } else {
      setEditing(true);
    }
  }
  return (
    <tr className="font-semibold text-center h-14 text-slate-400 ">
      <td className="rounded-l-xl">
        <input
          className="text-blue-400 rounded bg-slate-200 border-slate-400 focus:ring-blue-500"
          type="checkbox"
          onChange={() => {
            props.handleSelectedStudents(studentData.user_uuid);
          }}
          checked={props.selectedStudent.some(
            (item) => item.user_uuid === studentData.user_uuid
          )}
        ></input>
      </td>
      <td className="px-1">
        {editing ? (
          <input
            className="w-full h-8 text-center rounded-lg bg-neutral-100"
            value={studentData.number}
            onChange={(e) => {
              if (numRegexChecker(e.target.value)) {
                setStudentData({ ...studentData, number: e.target.value });
              }
            }}
          />
        ) : (
          <p>{studentData.number}</p>
        )}
      </td>
      <td className="px-1 ">
        {editing ? (
          <input
            className="w-full h-8 text-center rounded-lg bg-neutral-100"
            value={studentData.name}
            onChange={(e) => {
              if (korAndEngRegexChecker(e.target.value)) {
                setStudentData({ ...studentData, name: e.target.value });
              }
            }}
          />
        ) : (
          <p>{studentData.name}</p>
        )}
      </td>
      <td className="px-1 ">
        {editing ? (
          <input
            className="w-full h-8 text-center rounded-lg bg-neutral-100"
            value={studentData.user_id}
            onChange={(e) => {
              if (lowEngAndNumRegexChecker(e.target.value)) {
                setStudentData({ ...studentData, user_id: e.target.value });
              }
            }}
          />
        ) : (
          <p>{studentData.user_id}</p>
        )}
      </td>
      <td className="px-1 ">
        {editing ? (
          <input
            className="w-full h-8 text-center rounded-lg bg-neutral-100"
            value={studentData.phone_number}
            onChange={(e) => {
              if (numRegexChecker(e.target.value)) {
                setStudentData({
                  ...studentData,
                  phone_number: e.target.value,
                });
              }
            }}
          />
        ) : (
          <p>{studentData.phone_number}</p>
        )}
      </td>
      <td className="px-1 rounded-r-xl">
        <p>{moment(props.studentData.createdAt).format("YYYY-MM-DD")}</p>
      </td>
      <td className="px-1 rounded-r-xl">
        <button
          onClick={handleUpdateStudentInfo}
          className="px-3 py-1 text-white bg-blue-500 rounded-xl"
        >
          {!editing ? "수정" : "완료"}
        </button>
      </td>

      <td className="px-1 rounded-r-xl">
        <button
          onClick={async () => {
            const data = await postResetPasswordByTeacher(
              studentData.user_uuid
            );
            sucessToast(data.message);
          }}
          className="px-5 py-1 m-1 font-semibold text-white bg-red-500 rounded-xl"
        >
          초기화
        </button>
      </td>
      <td className="px-1 rounded-r-xl">
        <button
          onClick={async () => {
            const data = await postDeleteStudentByTeacher(
              studentData.user_uuid
            );
            sucessToast(data.message);
            props.refetch();
          }}
          className="px-3 py-1 m-1 font-semibold text-white bg-red-500 rounded-xl"
        >
          탈퇴
        </button>
      </td>
    </tr>
  );
}
