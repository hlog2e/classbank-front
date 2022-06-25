import TSideBar from "../../components/teacher/TSideBar";
import { BsCoin, BsCheckLg } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";

export default function TeacherHome() {
  const [bankName, setBankName] = useState("OO은행");
  const [onChangeBankName, setOnChangeBankName] = useState(false);

  const [moneyName, setMoneyName] = useState("화폐 이름");
  const [onChangeMoneyName, setOnChangeMoneyName] = useState(false);

  return (
    <div className="flex flex-col h-screen lg:flex-row bg-neutral-100">
      <TSideBar />
      <section className="flex flex-col w-full lg:w-[calc(100vw-288px)] h-full ">
        <div className="flex items-center py-10 mx-12 w-fit">
          {!onChangeBankName ? (
            <>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-[#56CCF2] to-[#2F80ED]">
                {bankName}
              </h1>
              <AiOutlineEdit
                onClick={() => {
                  setOnChangeBankName(!onChangeBankName);
                }}
                className="cursor-pointer text-slate-400"
                size="30"
              />
            </>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setOnChangeBankName(!onChangeBankName);
              }}
            >
              <input
                className="px-2 py-1 text-4xl font-bold bg-transparent border-b-2 focus:outline-none w-44"
                value={bankName}
                onChange={(e) => {
                  setBankName(e.target.value);
                }}
              />
              <button>
                <BsCheckLg className="ml-1 text-green-400" size="25" />
              </button>
            </form>
          )}
        </div>
        <div className="flex flex-wrap max-w-[800px] md:px-16  lg:justify-start  ">
          <div className="h-48 p-6 m-2 min-w-[160px] flex justify-between flex-col bg-white  flex-1 drop-shadow-xl rounded-3xl">
            <strong className="text-2xl ">화폐 단위</strong>
            {!onChangeMoneyName ? (
              <>
                <div className="flex items-center ">
                  <BsCoin className="text-gray-500" size="30px" />
                  <strong className="ml-4 text-xl">{moneyName}</strong>
                </div>
                <button
                  className="py-2 font-semibold text-white bg-blue-500 rounded-xl"
                  onClick={() => {
                    setOnChangeMoneyName(!onChangeMoneyName);
                  }}
                >
                  변경하기
                </button>
              </>
            ) : (
              <>
                <input
                  className="px-2 py-1 text-xl font-bold bg-transparent border-b-2 focus:outline-none "
                  value={moneyName}
                  onChange={(e) => {
                    setMoneyName(e.target.value);
                  }}
                />
                <button
                  className="py-2 font-semibold text-white bg-blue-500 rounded-xl"
                  onClick={() => {
                    setOnChangeMoneyName(!onChangeMoneyName);
                  }}
                >
                  변경완료
                </button>
              </>
            )}
          </div>
          <div className="h-48 p-6 m-2 min-w-[160px] bg-white  flex-1 drop-shadow-xl rounded-3xl">
            <strong className="text-2xl ">화폐 단위</strong>
            <span></span>
          </div>
          <div className="h-48 p-6 m-2 min-w-[160px]  bg-white  flex-1 drop-shadow-xl rounded-3xl">
            <strong className="text-2xl ">화폐 단위</strong>
            <span></span>
          </div>
        </div>
      </section>
    </div>
  );
}
