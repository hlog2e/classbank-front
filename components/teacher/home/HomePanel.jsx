import { useState } from "react";
import { BsCoin } from "react-icons/bs";
import Link from "next/link";

export default function HomePanel(props) {
  const [onChangeMoneyName, setOnChangeMoneyName] = useState(false);
  const [onChangeEza, setOnChangeEza] = useState(false);
  const [onChangeEzaTerm, setOnChangeEzaTerm] = useState(false);
  const [onChangeClassCode, setOnChangeClassCode] = useState(false);
  return (
    <>
      <section className="flex flex-wrap max-w-[1300px] md:px-16  lg:justify-start ">
        <div className="h-44 p-6 m-2 min-w-[176px] flex justify-between flex-col bg-white  flex-1 drop-shadow-xl rounded-3xl">
          <h1 className="text-xl font-bold">화폐 단위</h1>
          {!onChangeMoneyName ? (
            <>
              <div className="flex items-center ">
                <BsCoin className="text-gray-500" size="30px" />
                <p className="ml-2 text-xl font-bold">
                  {props.panelData.moneyName}
                </p>
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
                value={props.panelData.moneyName}
                onChange={(e) => {
                  props.setPanelData({
                    ...props.panelData,
                    moneyName: e.target.value,
                  });
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
        <div className="h-44 p-6 m-2 min-w-[176px]  bg-white  flex-1 drop-shadow-xl rounded-3xl">
          <h1 className="text-xl font-bold">구입승인 대기중</h1>
          <p className="mt-3 text-4xl font-semibold">
            {props.panelData.pendingBuyItemCount}개
          </p>
          <p className="mt-2 text-sm text-slate-400">
            <Link href="/teacher/manage/item">
              <a className="font-bold">"상품 관리"</a>
            </Link>
            로 이동하여 확인하세요!
          </p>
        </div>
        <div className="h-44 p-6 m-2 min-w-[176px] bg-white flex-1 drop-shadow-xl rounded-3xl">
          <h1 className="text-xl font-bold">다음 이자 지급일</h1>
          <p className="mt-3 text-3xl font-semibold">
            {props.panelData.nextEzaDay}
          </p>
          <p className="mt-3 text-sm text-slate-400">
            지급일 당일 오전 12시에 지급됩니다.
          </p>
        </div>
        <div className="h-44 p-6 m-2 min-w-[176px]  bg-white  flex flex-col justify-between   flex-1 drop-shadow-xl rounded-3xl">
          <h1 className="text-xl font-bold">이율</h1>
          {!onChangeEza ? (
            <>
              <p className="text-4xl font-semibold ">{props.panelData.eza}%</p>
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
                value={props.panelData.eza}
                onChange={(e) => {
                  props.setPanelData({
                    ...props.panelData,
                    eza: e.target.value,
                  });
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
        <div className="h-44 p-6 m-2 min-w-[176px] flex flex-col justify-between  bg-white flex-1 drop-shadow-xl rounded-3xl">
          <h1 className="text-xl font-bold">이자 지급 주기</h1>
          {!onChangeEzaTerm ? (
            <>
              <p className="text-4xl font-semibold ">
                {props.panelData.ezaTerm}일
              </p>
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
                value={props.panelData.ezaTerm}
                onChange={(e) => {
                  props.setPanelData({
                    ...props.panelData,
                    ezaTerm: e.target.value,
                  });
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
        <div className="h-44 p-6 m-2 min-w-[176px] flex flex-col justify-between  bg-white flex-1 drop-shadow-xl rounded-3xl">
          <h1 className="text-xl font-bold">학급 코드</h1>
          {!onChangeClassCode ? (
            <>
              <p className="text-4xl font-semibold ">
                {props.panelData.classCode}
              </p>
              <button
                onClick={() => {
                  setOnChangeClassCode(!onChangeClassCode);
                }}
                className="py-2 font-semibold text-center text-white bg-blue-500 rounded-xl"
              >
                변경하기
              </button>
            </>
          ) : (
            <>
              <input
                className="px-2 py-1 text-xl font-bold bg-transparent border-b-2 focus:outline-none "
                value={props.panelData.classCode}
                onChange={(e) => {
                  props.setPanelData({
                    ...props.panelData,
                    classCode: e.target.value,
                  });
                }}
              />
              <button
                onClick={() => {
                  setOnChangeClassCode(!onChangeClassCode);
                }}
                className="py-2 font-semibold text-center text-white bg-blue-500 rounded-xl"
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
