import {
  postChangeItemStatus,
  postItemAllow,
  postItemDeny,
} from "../../../../apis/item";
import { errorToast, sucessToast } from "../../../../utils/toast";

export default function PurchasePendingList(props) {
  return (
    <section className="px-8 md:px-20 md:py-10">
      <h1 className="p-4 text-2xl font-semibold text-slate-400">
        구입 승인 대기중
      </h1>
      <div className="bg-white md:w-[600px] w-full h-[500px] overflow-auto p-6 rounded-3xl">
        {props.purchaseItems.map((item) => {
          return (
            <PurchaseListItem
              purchaseData={item}
              key={item.id}
              getDataFromBackend={props.getDataFromBackend}
            />
          );
        })}
      </div>
    </section>
  );
}

function PurchaseListItem(props) {
  return (
    <div className="flex items-center justify-between w-full p-4 mb-2 h-14 rounded-2xl bg-neutral-100">
      <div className="flex flex-col items-start ">
        <p className="text-sm font-semibold md:text-md">
          {props.purchaseData.buyer_number} {props.purchaseData.buyer_name}
        </p>
        <p className="text-xs font-semibold md:text-sm text-slate-400">
          {props.purchaseData.item_name}
        </p>
        {/* <p className="ml-5 text-[8px] md:text-xs text-slate-400">
          {props.purchaseData} //createAt
        </p> */}
      </div>
      <div>
        <button
          onClick={() => {
            postItemAllow(props.purchaseData)
              .then((data) => {
                sucessToast(data.message);
                props.getDataFromBackend();
              })
              .catch((err) => {
                if (err.response.data) {
                  errorToast(err.response.data.message);
                } else {
                  errorToast("아이템 구입 수락 도중 오류가 발생하였습니다.");
                }
              });
          }}
          className="px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded-xl md:text-md"
        >
          수락
        </button>
        <button
          onClick={() => {
            postItemDeny(props.purchaseData)
              .then((data) => {
                sucessToast(data.message);
                props.getDataFromBackend();
              })
              .catch((err) => {
                if (err.response.data) {
                  errorToast(err.response.data.message);
                } else {
                  errorToast("아이템 구입 거절 도중 오류가 발생하였습니다.");
                }
              });
          }}
          className="px-3 py-1 ml-1 text-xs bg-slate-300 text-slate-500 rounded-xl md:text-md"
        >
          거절
        </button>
      </div>
    </div>
  );
}
