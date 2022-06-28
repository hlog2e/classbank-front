import { useState } from "react";
import TSideBarMenu from "./TSideBarMenu";

export default function TSideBar() {
  const [mobileSideBarOpened, setMobileSideBarOpened] = useState(false);

  return (
    <>
      <nav className="hidden h-screen shadow-lg lg:block bg-slate-200 rounded-l-3xl w-72">
        <TSideBarMenu />
      </nav>

      {/*---------아래부터는 모바일---------*/}

      <div>
        {/* 아래는 모바일 상단 NavBar */}
        <header className="block w-screen p-4 h-14 lg:hidden">
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
          <nav className=" h-[calc(100vh-112px);] shadow  bg-slate-200 rounded-l-3xl w-screen absolute z-50 top-14">
            <TSideBarMenu />
          </nav>
        ) : null}
      </div>
    </>
  );
}
