import { useState } from "react";

export default function StudentTable(props) {
  return (
    <section className="px-6 py-14 xl:px-20 xl:py-8">
      <p className="ml-3 text-2xl font-semibold text-slate-500">
        선택된 학생 {props.selectedStudent.length}명
      </p>
      <header className="h-12 m-2 ">
        <button className="px-3 py-2 m-1 font-semibold text-white bg-blue-500 rounded-xl">
          비밀번호 초기화
        </button>
        <button className="px-3 py-2 m-1 font-semibold text-white bg-blue-500 rounded-xl">
          회원탈퇴
        </button>
      </header>
      <div className="bg-white w-[900px] py-6 px-6 rounded-3xl drop-shadow-lg">
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
              <th className="w-16 rounded-r-xl">수정</th>
            </tr>
          </thead>
          <tbody>
            {props.studentsInfo.map((item) => {
              return (
                <StudentTableItem
                  key={item.id}
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
      alert("db로 전송로직");
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
            props.handleSelectedStudents(studentData.id);
          }}
          checked={props.selectedStudent.some(
            (item) => item.id === studentData.id
          )}
        ></input>
      </td>
      <td className="px-1">
        {editing ? (
          <input
            className="w-full h-8 text-center rounded-lg bg-neutral-100"
            value={studentData.number}
            onChange={(e) => {
              setStudentData({ ...studentData, number: e.target.value });
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
              setStudentData({ ...studentData, name: e.target.value });
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
            value={studentData.userId}
            onChange={(e) => {
              setStudentData({ ...studentData, userId: e.target.value });
            }}
          />
        ) : (
          <p>{studentData.userId}</p>
        )}
      </td>
      <td className="px-1 ">
        {editing ? (
          <input
            className="w-full h-8 text-center rounded-lg bg-neutral-100"
            value={studentData.phoneNumber}
            onChange={(e) => {
              setStudentData({ ...studentData, phoneNumber: e.target.value });
            }}
          />
        ) : (
          <p>{studentData.phoneNumber}</p>
        )}
      </td>
      <td className="px-1 rounded-r-xl">
        <p>2022-02-07</p>
      </td>
      <td className="px-1 rounded-r-xl">
        <button
          onClick={handleUpdateStudentInfo}
          className="px-3 py-1 text-white bg-blue-500 rounded-xl"
        >
          {!editing ? "수정" : "완료"}
        </button>
      </td>
    </tr>
  );
}
