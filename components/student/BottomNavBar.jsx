import { FaHome, FaCommentDollar, FaShoppingBasket } from "react-icons/fa";
import { GoThreeBars } from "react-icons/go";
import { IoTicket } from "react-icons/io5";
import { useRouter } from "next/router";
import classNames from "classnames";

export default function BottomNavBar() {
  const navItems = [
    { id: 1, name: "홈", iconName: FaHome, path: "/student/home" },
    {
      id: 2,
      name: "아이템",
      iconName: FaShoppingBasket,
      path: "/student/item",
    },
    {
      id: 3,
      name: "송금",
      iconName: FaCommentDollar,
      path: "/student/send-money",
    },
    { id: 4, name: "복권", iconName: IoTicket, path: "/student/lotto" },
    {
      id: 5,
      name: "더보기",
      iconName: GoThreeBars,
      path: "/student/more",
    },
  ];

  return (
    <section className="fixed w-full max-w-[800px] h-20 rounded-t-3xl bg-white bottom-0 left-[50%] -translate-x-1/2 ">
      <div className="flex justify-around w-full h-16 px-4 py-1 drop-shadow-2xl">
        {navItems.map((item) => {
          return <NavBarItem navItemData={item} />;
        })}
      </div>
    </section>
  );
}

function NavBarItem(props) {
  const router = useRouter();
  return (
    <div
      className={classNames(
        "flex flex-col items-center justify-between p-2 h-14 w-14 select-none  rounded-2xl cursor-pointer",
        props.navItemData.path === router.pathname
          ? "text-slate-700"
          : "text-slate-400"
      )}
      onClick={() => {
        router.push(props.navItemData.path);
      }}
    >
      <props.navItemData.iconName className="w-6 h-6" />
      <p className="text-xs">{props.navItemData.name}</p>
    </div>
  );
}
