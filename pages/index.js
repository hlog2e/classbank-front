import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/landing/NavBar";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <div className="md:h-[500px] h-[600px]   px-8 md:px-20 flex items-center justify-center w-full">
        <div className=" w-[1100px] h-[430px]  md:flex-row flex-col flex justify-between items-center">
          <div className=" w-[400px] flex flex-col p-5">
            <h1 className="text-xl font-semibold ">온라인 학급은행</h1>
            <p className="text-4xl">
              <strong className=" text-slate-500">CLASS </strong>
              <strong className=" bg-clip-text text-transparent bg-gradient-to-r from-[#56CCF2] to-[#2F80ED]">
                BANK
              </strong>
            </p>
            <br />
            <p className=" ">우리반에 학급화폐를 도입하여</p>
            <p className=" ">학생들에게 경제관념을 심어주는건 어떨까요?</p>
            <br className="" />
            <div className=" mt-3  lg:justify-start flex lg:flex-row h-28 flex-col lg:h-fit justify-between  lg:max-w-none text-center my-4">
              <a className=" font-light px-9 py-3   mx-1 text-white rounded-full bg-gradient-to-l from-[#56CCF2] to-[#2F80ED]">
                학생 앱 실행
              </a>

              <a className="  px-9 py-3 mx-1 font-light text-white bg-gray-400 rounded-full ">
                선생님 바로가기
              </a>
            </div>
          </div>

          <div>
            <img className="w-[450px]" src="/svgs/class.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}
