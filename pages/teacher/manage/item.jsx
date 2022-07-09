import { useState } from "react";
import PendingItemListPanel from "../../../components/teacher/manage/item/PendingItemListPanel";
import SellingItemListPanel from "../../../components/teacher/manage/item/SellingItemListPanel";
import TSideBar from "../../../components/teacher/TSideBar";
export default function Item() {
  const [sellingItems, setSellingItems] = useState([
    {
      itemId: "dsfajldf",
      itemName: "칼종례 요구 쿠폰",
      itemDesc: "청소 미흡 등의 사유로 종례가 늦춰질 시 사용 가능",
      itemPrice: "10000",
    },
    {
      itemId: "dsfajldfdd",
      itemName: "과자",
      itemDesc: "간식입니다.",
      itemPrice: "10000",
    },
    {
      itemId: "dsfajldfdd",
      itemName: "과자",
      itemDesc: "간식입니다.",
      itemPrice: "10000",
    },
    {
      itemId: "dsfajldfdd",
      itemName: "과자",
      itemDesc: "간식입니다.",
      itemPrice: "10000",
    },
    {
      itemId: "dsfajldfdd",
      itemName: "과자",
      itemDesc: "간식입니다.",
      itemPrice: "10000",
    },
    {
      itemId: "dsfajldfdd",
      itemName: "과자",
      itemDesc: "간식입니다.",
      itemPrice: "10000",
    },
    {
      itemId: "dsfajldfdd",
      itemName: "과자",
      itemDesc: "간식입니다.",
      itemPrice: "10000",
    },
    {
      itemId: "dsfajldfdd",
      itemName: "과자",
      itemDesc: "간식입니다.",
      itemPrice: "10000",
    },
  ]);
  const [pendingItems, setPendingItems] = useState([
    {
      itemId: "dsfajldf",
      itemName: "급식먼저먹기 급식먼저먹기 급식먼저먹기",
      itemDesc: "급식을 먼저먹는 아이템입니다.",
      itemPrice: "10000",
    },
    {
      itemId: "dsfajldfdd",
      itemName: "과자",
      itemDesc: "간식입니다.",
      itemPrice: "10000",
    },
    {
      itemId: "dsfajldfdd",
      itemName: "과자",
      itemDesc: "간식입니다.",
      itemPrice: "10000",
    },
    {
      itemId: "dsfajldfdd",
      itemName: "과자",
      itemDesc: "간식입니다.",
      itemPrice: "10000",
    },
    {
      itemId: "dsfajldfdd",
      itemName: "과자",
      itemDesc: "간식입니다.",
      itemPrice: "10000",
    },
    {
      itemId: "dsfajldfdd",
      itemName: "과자",
      itemDesc: "간식입니다.",
      itemPrice: "10000",
    },
    {
      itemId: "dsfajldfdd",
      itemName: "과자",
      itemDesc: "간식입니다.",
      itemPrice: "10000",
    },
    {
      itemId: "dsfajldfdd",
      itemName: "과자",
      itemDesc: "간식입니다.",
      itemPrice: "10000",
    },
  ]);
  return (
    <div className="flex flex-col lg:flex-row bg-neutral-100">
      <TSideBar />
      <section className="w-full lg:ml-64 overflow-scroll ">
        <h1 className="mx-12 mt-8 text-5xl font-bold md:mx-20 md:mt-20">
          아이템
        </h1>
        <SellingItemListPanel sellingItems={sellingItems} />
        <PendingItemListPanel pendingItems={pendingItems} />
      </section>
    </div>
  );
}
