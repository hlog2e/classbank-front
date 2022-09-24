import { useState } from "react";
import TSideBarMenu from "./TSideBarMenu";
import { MdOutlineLogout, MdOutlineSettings } from "react-icons/md";
import Logo from "../Logo";

export default function TSideBar() {
  const [mobileSideBarOpened, setMobileSideBarOpened] = useState(false);

  return (
    <>
      <nav className="fixed flex-col justify-between hidden w-64 h-screen bg-gray-200 shadow-lg lg:flex">
        <TSideBarMenu />
        <BottomLogoutSection />
      </nav>

      {/*---------아래부터는 모바일---------*/}

      {/* 아래는 모바일 상단 NavBar */}
      <header className="sticky top-0 z-50 w-full p-4 h-14 bg-neutral-100 lg:hidden">
        <div
          className="block h-8 rounded-md w-7 lg:hidden hover:bg-neutral-100"
          onClick={() => {
            setMobileSideBarOpened(!mobileSideBarOpened);
          }}
        >
          {!mobileSideBarOpened ? (
            <img className="p-1" src="/icons/bars.svg" />
          ) : (
            <img className="px-1" src="/icons/xmark.svg" />
          )}
        </div>
      </header>
      {/* 아래는 모바일 사이드 메뉴 */}
      {mobileSideBarOpened ? (
        <nav className=" h-[calc(100vh-56px);] shadow  bg-slate-200 rounded-t-3xl fixed  w-screen z-30 top-14 flex flex-col justify-between">
          <TSideBarMenu />
          <BottomLogoutSection />
        </nav>
      ) : null}
    </>
  );
}

function BottomLogoutSection() {
  return (
    <div className="flex items-center justify-between w-full h-20 p-4">
      <div className="font-semibold">
        <p className="text-slate-600">김홍록 선생님</p>
        <p className="text-sm text-slate-400">hlog2e</p>
      </div>
      <div className="flex">
        <button className="flex flex-col items-center justify-between text-red-500">
          <MdOutlineLogout className="w-6 h-6" />
          <p className="text-xs">로그아웃</p>
        </button>
        <button className="flex flex-col items-center justify-between ml-3 text-slate-500">
          <MdOutlineSettings className="w-6 h-6" />
          <p className="text-xs">내정보 수정</p>
        </button>
      </div>
    </div>
  );
}
