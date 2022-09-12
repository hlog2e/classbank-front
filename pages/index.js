import Head from "next/head";
import Link from "next/link";
import NavBar from "../components/landing/NavBar";
import Logo from "../components/Logo";

export default function Home() {
  return (
    <div className="bg-white ">
      <NavBar />
      <section className="md:h-[500px] h-[600px]   px-8 md:px-20 flex items-center justify-center w-full ">
        <div className=" w-[1100px] h-[450px]  md:flex-row flex-col flex justify-between items-center ">
          <div className=" max-w-[400px] w-full flex flex-col">
            <h1 className="text-2xl font-semibold ">온라인 학급은행</h1>

            <div className="text-5xl">
              <Logo />
            </div>
            <div className="py-6">
              <p className="my-1 ">학급은행 온라인뱅킹 플랫폼</p>
              <p className="">온라인 송금, 소비, 복권 기능까지!</p>
            </div>
            <div className="flex flex-col justify-between my-4 mt-3 text-center lg:justify-start lg:flex-row h-28 lg:h-fit lg:max-w-none">
              <Link href="/student">
                <a className="py-3 mx-1 text-white bg-blue-500 rounded-full px-9">
                  앱 다운로드
                </a>
              </Link>
              <Link href="/join">
                <a className="py-3 mx-1 rounded-full bg-neutral-200 hover:border-blue-500 px-9">
                  회원가입
                </a>
              </Link>
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
