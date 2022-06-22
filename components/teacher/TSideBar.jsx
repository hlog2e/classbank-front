import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Logo from "../Logo";

export default function TSideBar() {
  const [mobileSideBarOpened, setMobileSideBarOpened] = useState(false);

  return (
    <>
      <nav className="hidden h-full shadow md:block bg-slate-200 rounded-l-3xl w-72">
        <SideMenu />
      </nav>

      {/*---------아래부터는 모바일---------*/}

      <div>
        <header className="block w-screen p-4 h-14 md:hidden">
          <div
            className="block h-8 rounded-md w-7 md:hidden hover:bg-slate-200"
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
        {mobileSideBarOpened ? (
          <nav className=" h-[calc(100vh-112px);] shadow  bg-slate-200 rounded-l-3xl w-screen absolute  top-14">
            <SideMenu />
          </nav>
        ) : null}
      </div>
    </>
  );
}

function SideMenu() {
  const router = useRouter();
  const menuList = [
    { id: 1, name: "홈", iconPath: "", path: "/teacher/home" },
    { id: 2, name: "학생 관리", iconPath: "", path: "/teacher/item" },
    { id: 3, name: "상품 관리", iconPath: "", path: "/teacher/item2" },
  ];
  return (
    <div>
      <div className="px-4 py-8 ">
        <div className="text-2xl border-b border-b-slate-300 ">
          <Logo />
        </div>
        <p className=" text-slate-500">선생님 페이지</p>
      </div>
      {menuList.map((item) => {
        return (
          <div
            key={item.id}
            className={
              "flex px-4 py-3 m-4 font-semibold cursor-pointer hover:text-blue-500 rounded-xl hover:bg-blue-200 " +
              (item.path === router.pathname
                ? "text-blue-500 bg-blue-200"
                : "text-black")
            }
            onClick={() => {
              router.push(item.path);
            }}
          >
            <div>{item.name}</div>
          </div>
        );
      })}
    </div>
  );
}
