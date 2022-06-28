import { useRouter } from "next/router";
import Logo from "../Logo";

export default function TSideBarMenu() {
  const router = useRouter();
  const menuList = [
    { id: 1, name: "홈", iconPath: "", path: "/teacher/home" },
    { id: 2, name: "자산 관리", iconPath: "", path: "/teacher/manage/money" },
    { id: 3, name: "학생 관리", iconPath: "", path: "/teacher/manage/student" },
    { id: 4, name: "상품 관리", iconPath: "", path: "/teacher/manage/item" },
  ];
  return (
    <>
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
    </>
  );
}
