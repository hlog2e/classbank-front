import { useState } from "react";
import BottomNavBar from "../../components/student/BottomNavBar";
import ItemRowList from "../../components/student/item/ItemRowList";

export default function StudentItem() {
  const [bankInfo, setBancInfo] = useState({
    bankName: "소영은행",
    moneyName: "원",
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
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center bg-neutral-200">
      <div className="max-w-[800px] w-full bg-neutral-100 overflow-auto pb-32">
        <h1 className="mt-12 ml-6 text-4xl font-bold">아이템</h1>
        <ItemRowList items={items} />
        <section>
          <div></div>
        </section>
        <BottomNavBar />
      </div>
    </div>
  );
}
