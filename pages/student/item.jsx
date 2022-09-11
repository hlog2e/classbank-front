import { useState } from "react";
import BottomNavBar from "../../components/student/BottomNavBar";
import ItemPendingList from "../../components/student/item/ItemPendingList";
import ItemRowList from "../../components/student/item/ItemRowList";
import AuthRoute from "../../middlewares/AuthRoute";

export default function StudentItem() {
  const [bankInfo, setBancInfo] = useState({
    bankName: "소영은행",
    moneyName: "메소",
  });
  const [items, setItems] = useState([
    {
      itemId: "dsfajldfdd",
      itemName: "자바스크립트",
      itemDesc: "간식입니다.",
      itemPrice: "10000",
    },
    {
      itemId: "dsfajldfdddd",
      itemName: "자리바꾸기",
      itemDesc: "간식입니다.",
      itemPrice: "10000",
    },
    {
      itemId: "dsfajldddfdd",
      itemName: "타입스크립트",
      itemDesc: "간식입니다.",
      itemPrice: "10000",
    },
    {
      itemId: "dsfajlmkddldfdd",
      itemName: "금천고등학교",
      itemDesc: "간식입니다.",
      itemPrice: "10000",
    },
  ]);
  const [pendingItems, setPendingItems] = useState([
    {
      itemId: "dsfajldf",
      itemName: "급식먼저먹기",
      itemBuyDate: "1657848366",
    },
    {
      itemId: "dsfajld22f",
      itemName: "급식먼저먹기",
      itemBuyDate: "1657848366",
    },
    {
      itemId: "dsfajld22222f",
      itemName: "급식먼저먹기",
      itemBuyDate: "1657848366",
    },
  ]);
  return (
    <AuthRoute>
      <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center bg-neutral-200">
        <div className="max-w-[800px] w-full bg-neutral-100 overflow-auto pb-32">
          <h1 className="mt-12 ml-6 text-4xl font-bold">아이템</h1>
          <ItemRowList bankInfo={bankInfo} items={items} />
          <ItemPendingList pendingItems={pendingItems} />
          <BottomNavBar />
        </div>
      </div>
    </AuthRoute>
  );
}
