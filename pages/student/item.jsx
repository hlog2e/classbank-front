import { useState } from "react";
import BottomNavBar from "../../components/student/BottomNavBar";
import ItemRowList from "../../components/student/item/ItemRowList";

export default function StudentItem() {
  const [items, setItems] = useState([
    {
      itemId: "dsfajldfdd",
      itemName: "과자4",
      itemDesc: "간식입니다.",
      itemPrice: "10000",
    },
    {
      itemId: "dsfajldfdddd",
      itemName: "과자3",
      itemDesc: "간식입니다.",
      itemPrice: "10000",
    },
    {
      itemId: "dsfajldddfdd",
      itemName: "과자2",
      itemDesc: "간식입니다.",
      itemPrice: "10000",
    },
    {
      itemId: "dsfajddldfdd",
      itemName: "과자1",
      itemDesc: "간식입니다.",
      itemPrice: "10000",
    },
  ]);
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center bg-neutral-200">
      <div className="max-w-[800px] w-full bg-neutral-100 overflow-auto pb-32">
        <h1 className="mt-12 ml-6 text-4xl font-bold">아이템</h1>
        <ItemRowList items={items} />
        <BottomNavBar />
      </div>
    </div>
  );
}
