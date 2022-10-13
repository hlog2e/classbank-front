import { useEffect, useState } from "react";
import { getBankInfoStudent } from "../../apis/bank";
import { getItemsStudent } from "../../apis/item";
import { getPendingPurchasesStudent } from "../../apis/purchase";
import BottomNavBar from "../../components/student/BottomNavBar";
import ItemPendingList from "../../components/student/item/ItemPendingList";
import ItemRowList from "../../components/student/item/ItemRowList";
import AuthRoute from "../../middlewares/AuthRoute";

export default function StudentItem() {
  const [bankInfo, setBankInfo] = useState({
    money_name: "",
  });
  const [items, setItems] = useState([]);
  const [pendingItems, setPendingItems] = useState([]);

  const getDataFromBackend = async () => {
    const _bankData = await getBankInfoStudent();
    setBankInfo(_bankData);

    const _items = await getItemsStudent(_bankData.id);
    setItems(_items);

    const _purchases = await getPendingPurchasesStudent();
    setPendingItems(_purchases);
  };

  useEffect(() => {
    getDataFromBackend();
  }, []);
  return (
    <AuthRoute isTeacherPage={false}>
      <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center bg-neutral-200">
        <div className="max-w-[800px] w-full bg-neutral-100 overflow-auto pb-32">
          <h1 className="mt-20 ml-6 text-4xl font-bold">아이템</h1>
          <ItemRowList
            bankInfo={bankInfo}
            items={items}
            getDataFromBackend={getDataFromBackend}
          />
          <ItemPendingList
            pendingItems={pendingItems}
            getDataFromBackend={getDataFromBackend}
          />
          <BottomNavBar />
        </div>
      </div>
    </AuthRoute>
  );
}
