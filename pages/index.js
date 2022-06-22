import Head from "next/head";
import NavBar from "../components/landing/NavBar";
import Logo from "../components/Logo";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <section className="md:h-[500px] h-[600px]   px-8 md:px-20 flex items-center justify-center w-full">
        <div className=" w-[1100px] h-[450px]  md:flex-row flex-col flex justify-between items-center">
          <div className=" max-w-[400px] w-full flex flex-col">
            <h1 className="text-xl font-semibold ">온라인 학급은행</h1>
            <div className="text-4xl">
              <Logo />
            </div>
            <br />
            <p className="">우리반에 학급화폐를 도입하여</p>
            <p className="">학생들에게 경제관념을 심어주는건 어떨까요?</p>
            <br className="" />
            <div className="flex flex-col justify-between my-4 mt-3 text-center lg:justify-start lg:flex-row h-28 lg:h-fit lg:max-w-none">
              <a className=" font-light px-9 py-3   mx-1 text-white rounded-full bg-gradient-to-l from-[#56CCF2] to-[#2F80ED]">
                학생 앱 실행
              </a>

              <a className="py-3 mx-1 font-light text-white bg-gray-400 rounded-full px-9">
                선생님 바로가기
              </a>
            </div>
          </div>
          <div className="p-4">
            <img className="w-[450px]" src="/svgs/class.svg" />
          </div>
        </div>
      </section>
    </div>
  );
}
