export default function StudentSelectList() {
  return (
    <div className="px-12 py-6 md:px-20 md:py-12 ">
      <h1 className="m-3 text-2xl font-semibold">학생 선택</h1>
      <div className="w-full max-w-[600px] flex flex-col rounded-3xl drop-shadow-xl py-6 px-6 bg-white">
        <div className="flex items-center justify-between h-10 mb-2 border-b">
          <input type="checkbox" className="mx-5" />
          <div className="flex justify-between w-[90%] ">
            <div className=" w-[15%]  text-center">학번</div>
            <div className=" w-[40%]  text-center ">이름</div>
            <div className="w-[40%]  text-center ">잔액</div>
          </div>
        </div>

        <StudentItem
          studentData={{ number: 2501, name: "김홍록", balance: "1,000,000" }}
        />
        <StudentItem
          studentData={{ number: 2502, name: "김홍록", balance: "1,000,000" }}
        />
        <StudentItem
          studentData={{ number: 2503, name: "김홍록", balance: "1,000,000" }}
        />
        <StudentItem
          studentData={{ number: 2504, name: "김홍록", balance: "1,000,000" }}
        />
        <StudentItem
          studentData={{ number: 2505, name: "김홍록", balance: "1,000,000" }}
        />
      </div>
    </div>
  );
}

function StudentItem(props) {
  return (
    <div className="flex items-center justify-between py-3 mb-2 rounded-xl hover:hover:bg-neutral-100">
      <input type="checkbox" className="mx-5" />
      <div className="flex justify-between w-[90%] ">
        <div className=" w-[15%] text-center">{props.studentData.number}</div>
        <div className="text-center w-[40%]">{props.studentData.name}</div>
        <div className="text-center w-[40%]">{props.studentData.balance}</div>
      </div>
    </div>
  );
}
