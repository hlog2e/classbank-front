import Link from "next/link";
import Logo from "../Logo";

export default function NavBar() {
  return (
    <header className="sticky top-0 left-0 right-0 flex items-center justify-center w-full bg-white shadow h-14">
      <div className=" max-w-[1200px]  w-5/6 flex justify-between  items-center">
        <Link href="/">
          <a className="px-1 text-lg md:text-xl ">
            <Logo />
          </a>
        </Link>

        <div className="">
          <Link href="/login">
            <a className="inline-block w-16 py-1 mx-1 text-sm text-center text-white bg-blue-500 rounded-full">
              로그인
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
