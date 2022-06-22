import Link from "next/link";
import Logo from "../Logo";

export default function NavBar() {
  return (
    <header className="sticky top-0 left-0 right-0 flex items-center justify-center w-full bg-white shadow h-14">
      <div className=" max-w-[1200px]  w-5/6 flex justify-between NavContainer">
        <Link href="/">
          <a className="px-1 text-lg md:text-xl ">
            <Logo />
          </a>
        </Link>

        <div className="">
          <Link href="/student">
            <a className="text-sm font-light px-4 py-1 inline-block mx-1 text-white rounded-full bg-gradient-to-l from-[#56CCF2] to-[#2F80ED]">
              학생 앱 실행
            </a>
          </Link>
          <Link href="/teacher">
            <a className="hidden px-3 py-1 mx-1 text-sm font-light text-white bg-gray-400 rounded-full md:inline-block">
              선생님 바로가기
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
