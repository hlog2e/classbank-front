import { useEffect, useState } from "react";
import { getTeacherBankInfo } from "../../../apis/bank";
import { getItemsTeacher } from "../../../apis/item";
import { getAllPendingPurchases } from "../../../apis/purchase";
import ItemAddModal from "../../../components/teacher/manage/item/ItemAddModal";
import PendingItemListPanel from "../../../components/teacher/manage/item/PendingItemListPanel";
import PurchasePendingList from "../../../components/teacher/manage/item/PurchasePendigList";
import SellingItemListPanel from "../../../components/teacher/manage/item/SellingItemListPanel";
import TSideBar from "../../../components/teacher/TSideBar";
import AuthRoute from "../../../middlewares/AuthRoute";

export default function Item() {
  const [bankData, setBankData] = useState({});
  const [items, setItems] = useState([]);
  const [purchaseItems, setPurchaseItems] = useState([]);

  const [itemAddModal, setItemAddModal] = useState(false);

  const getDataFromBackend = async () => {
    const _bankData = await getTeacherBankInfo();
    setBankData(_bankData);

    const _items = await getItemsTeacher(_bankData.id);
    setItems(_items);

    const _purchaseItems = await getAllPendingPurchases(_bankData.id);
    setPurchaseItems(_purchaseItems);
  };

  useEffect(() => {
    getDataFromBackend();
  }, []);
  return (
    <AuthRoute isTeacherPage={true}>
      <div className="flex flex-col lg:flex-row bg-neutral-100">
        <TSideBar />
        <section className="w-full overflow-scroll lg:ml-64 ">
          <div className="flex items-center justify-between px-12 mt-10 lg:px-20 lg:mt-20 ">
            <h1 className="text-5xl font-bold ">아이템</h1>
            <button
              onClick={() => {
                setItemAddModal(true);
              }}
              className="font-semibold text-slate-500"
            >
              아이템 추가
            </button>
          </div>

          <ItemAddModal
            handleModalClose={() => {
              setItemAddModal(false);
            }}
            isOpen={itemAddModal}
            items={items}
            setItems={setItems}
            bankData={bankData}
          />
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
