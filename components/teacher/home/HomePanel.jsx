import { useState } from "react";
import { BsCoin } from "react-icons/bs";

export default function HomePanel() {
  const [moneyName, setMoneyName] = useState("도지코인");
  const [onChangeMoneyName, setOnChangeMoneyName] = useState(false);

  const [eza, setEza] = useState(10);
  const [onChangeEza, setOnChangeEza] = useState(false);

  const [ezaTerm, setEzaTerm] = useState("7");
  const [onChangeEzaTerm, setOnChangeEzaTerm] = useState(false);
  return (
    <>
      <section className="flex flex-wrap max-w-[1200px] md:px-16  lg:justify-start  ">
        <div className="h-48 p-6 m-2 min-w-[170px] flex justify-between flex-col bg-white  flex-1 drop-shadow-xl rounded-3xl">
          <h1 className="text-2xl font-bold">화폐 단위</h1>
          {!onChangeMoneyName ? (
            <>
              <div className="flex items-center ">
                <BsCoin className="text-gray-500" size="30px" />
                <p className="ml-2 text-xl font-bold">{moneyName}</p>
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
                className="px-2 py-1 text-xl font-bold bg-transparent border-b-2 focus:outline-none"
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
        <div className="h-48 p-6 m-2 min-w-[170px] bg-white flex-1 drop-shadow-xl rounded-3xl">
          <h1 className="text-2xl font-bold">판매중인 상품</h1>
          <p className="mt-6 text-5xl font-semibold">10개</p>
        </div>
        <div className="h-48 p-6 m-2 min-w-[170px]  bg-white  flex-1 drop-shadow-xl rounded-3xl">
          <h1 className="text-xl font-bold">구입승인 대기 중</h1>
          <p className="mt-6 text-5xl font-semibold">10개</p>
        </div>
        <div className="h-48 p-6 m-2 min-w-[170px]  bg-white  flex flex-col justify-between   flex-1 drop-shadow-xl rounded-3xl">
          <h1 className="text-2xl font-bold">이율</h1>
          {!onChangeEza ? (
            <>
              <p className="text-4xl font-semibold ">{eza}%</p>
              <button
                className="py-2 font-semibold text-white bg-blue-500 rounded-xl"
                onClick={() => {
                  setOnChangeEza(!onChangeEza);
                }}
              >
                변경하기
              </button>
            </>
          ) : (
            <>
              <input
                className="px-2 py-1 text-xl font-bold bg-transparent border-b-2 focus:outline-none "
                value={eza}
                onChange={(e) => {
                  setEza(e.target.value);
                }}
              />
              <button
                className="py-2 font-semibold text-white bg-blue-500 rounded-xl"
                onClick={() => {
                  setOnChangeEza(!onChangeEza);
                }}
              >
                변경완료
              </button>
            </>
          )}
        </div>
        <div className="h-48 p-6 m-2 min-w-[170px] flex flex-col justify-between  bg-white    flex-1 drop-shadow-xl rounded-3xl">
          <h1 className="text-2xl font-bold">이자 지급 주기</h1>
          {!onChangeEzaTerm ? (
            <>
              <p className="text-4xl font-semibold ">{ezaTerm}일</p>
              <button
                className="py-2 font-semibold text-white bg-blue-500 rounded-xl"
                onClick={() => {
                  setOnChangeEzaTerm(!onChangeEzaTerm);
                }}
              >
                변경하기
              </button>
            </>
          ) : (
            <>
              <input
                className="px-2 py-1 text-xl font-bold bg-transparent border-b-2 focus:outline-none "
                value={ezaTerm}
                onChange={(e) => {
                  setEzaTerm(e.target.value);
                }}
              />
              <button
                className="py-2 font-semibold text-white bg-blue-500 rounded-xl"
                onClick={() => {
                  setOnChangeEzaTerm(!onChangeEzaTerm);
                }}
              >
                변경완료
              </button>
            </>
          )}
        </div>
      </section>
    </>
  );
}