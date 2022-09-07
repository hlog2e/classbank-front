import { useState } from "react";
import TSideBarMenu from "./TSideBarMenu";

export default function TSideBar() {
  const [mobileSideBarOpened, setMobileSideBarOpened] = useState(false);

  return (
    <>
      <nav className="fixed hidden w-64 h-screen bg-gray-200 shadow-lg lg:block">
        <TSideBarMenu />
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
        <nav className=" h-[calc(100vh-56px);] shadow  bg-slate-200 rounded-t-3xl fixed  w-screen z-30 top-14">
          <TSideBarMenu />
        </nav>
      ) : null}
    </>
  );
}
