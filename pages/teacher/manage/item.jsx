import { useEffect, useState } from "react";
import { getTeacherBankInfo } from "../../../apis/bank";
import { getItemsTeacher } from "../../../apis/item";
import PendingItemListPanel from "../../../components/teacher/manage/item/PendingItemListPanel";
import PurchasePendingList from "../../../components/teacher/manage/item/PurchasePendigList";
import SellingItemListPanel from "../../../components/teacher/manage/item/SellingItemListPanel";
import TSideBar from "../../../components/teacher/TSideBar";
import AuthRoute from "../../../middlewares/AuthRoute";

export default function Item() {
  const [bankData, setBankData] = useState({});
  const [items, setItems] = useState([]);

  const [purchaseItems, setPurchaseItems] = useState([
    {
      purchaseId: "dffsdaddd",
      itemName: "급식 먼저 먹기",
      purchaserNumber: "2507",
      purchaserName: "김홍록",
      purchaseDate: "2022-02-07 15:35:37",
    },
    {
      purchaseId: "dffsdaddd",
      itemName: "급식 먼저 먹기",
      purchaserNumber: "2507",
      purchaserName: "김홍록",
      purchaseDate: "2022-02-07 15:35:37",
    },
    {
      purchaseId: "dffsdaddd",
      itemName: "급식 먼저 먹기",
      purchaserNumber: "2507",
      purchaserName: "김홍록",
      purchaseDate: "2022-02-07 15:35:37",
    },
  ]);

  useEffect(() => {
    getTeacherBankInfo().then((_bankData) => {
      setBankData(_bankData);
      console.log(_bankData);
      getItemsTeacher(_bankData.id).then((items) => {
        setItems(items);
      });
    });
  }, []);
  return (
    <AuthRoute isTeacherPage={true}>
      <div className="flex flex-col lg:flex-row bg-neutral-100">
        <TSideBar />
        <section className="w-full overflow-scroll lg:ml-64 ">
          <h1 className="mx-12 mt-8 text-5xl font-bold md:mx-20 md:mt-20">
            아이템
          </h1>
          <SellingItemListPanel
            items={items}
            setItems={setItems}
            bankData={bankData}
          />
          <PendingItemListPanel
            items={items}
            setItems={setItems}
            bankData={bankData}
          />
          <PurchasePendingList purchaseItems={purchaseItems} />
        </section>
      </div>
    </AuthRoute>
  );
}
