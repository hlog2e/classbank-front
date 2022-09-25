import { useEffect, useState } from "react";
import { numToStringAndComma } from "../../../../utils/comma";

export default function StudentSelectList(props) {
  const [sortBy, setSortBy] = useState("number");
  const [selectedAll, setSelectedAll] = useState(false);

  useEffect(() => {
    if (props.selectedStudent.length === props.studentsData.length) {
      setSelectedAll(true);
    } else {
      setSelectedAll(false);
    }
  }, [props.selectedStudent]);
  return (
    <div className="w-full px-12 py-6 md:px-20 md:py-12 ">
      <div className="flex max-w-[400px] flex-col w-full px-6 py-6 bg-white rounded-3xl drop-shadow-xl">
        <div className="flex items-center justify-between h-12 mb-2 border-b">
          <div>
            <button
              onClick={() => {
                if (!selectedAll) {
                  props.handleSelectAll(true);
                  setSelectedAll(true);
                } else {
                  props.handleSelectAll(false);
                  setSelectedAll(false);
                }
              }}
              className="p-1 text-sm font-bold text-blue-500 rounded-lg hover:bg-slate-200"
            >
              {!selectedAll ? "전체선택" : "전체해제"}
            </button>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => {
                setSortBy("number");
                props.setStudentsData(
                  props.studentsData.sort((a, b) => {
                    return a.number - b.number;
                  })
                );
              }}
              className={
                "p-1 text-sm rounded-lg hover:bg-slate-200 text-slate-500" +
                (sortBy === "number" ? " font-bold" : "")
              }
            >
              학번순
            </button>
            <hr className="w-[1px] h-4 bg-slate-300" />
            <button
              onClick={() => {
                setSortBy("balance");
                props.setStudentsData(
                  props.studentsData.sort((a, b) => {
                    return b.balance - a.balance;
                  })
                );
              }}
              className={
                "p-1 text-sm rounded-lg text-slate-500 hover:bg-slate-200" +
                (sortBy === "balance" ? " font-bold" : "")
              }
            >
              잔액순
            </button>
          </div>
        </div>
        {props.studentsData.map((student) => {
          return (
            <StudentItem
              key={student.user_uuid}
              studentData={student}
              selectedStudent={props.selectedStudent}
              handleSelectedStudents={props.handleSelectedStudents}
              bankData={props.bankData}
            />
          );
        })}
      </div>
    </div>
  );
}

function StudentItem(props) {
  return (
    <div
      onClick={() => {
        props.handleSelectedStudents(
          props.studentData.user_uuid,
          props.studentData.name
        );
      }}
      className={`
        flex items-center py-2 mb-2 cursor-pointer rounded-2xl hover:shadow-xl ${
          props.selectedStudent.some(
            (item) => item.user_uuid === props.studentData.user_uuid
          )
            ? "bg-blue-100"
            : ""
        }
      `}
    >
      <div className="px-4">
        <div className="flex ">
          <div className="mr-1 font-semibold">{props.studentData.number}</div>
          <div className="font-semibold">{props.studentData.name}</div>
        </div>
        <div className="text-sm text-slate-400">
          잔액 : {numToStringAndComma(props.studentData.balance)}{" "}
          {props.bankData.money_name}
        </div>
      </div>
    </div>
  );
}
