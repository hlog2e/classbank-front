import moment from "moment";
import { postCancelPurchase } from "../../../apis/purchase";
import { errorToast, sucessToast } from "../../../utils/toast";

export default function ItemPendingList(props) {
  return (
    <section className="px-6 py-2">
      <h1 className="p-2 font-semibold text-slate-500">
        구입 승인 대기중 {props.pendingItems.length}건
      </h1>
      <div className="w-full p-3 bg-white min-h-[280px] rounded-2xl shadow-md">
        {props.pendingItems.map((item) => {
          return (
            <PendingItem
              key={item.id}
              itemData={item}
              getDataFromBackend={props.getDataFromBackend}
            />
          );
        })}
      </div>
    </section>
  );
}

function PendingItem(props) {
  return (
    <div className="flex items-center justify-between w-full h-12 p-4 mb-2 bg-neutral-100 rounded-xl">
      <div className="flex items-center">
        <h1 className="text-sm font-semibold">{props.itemData.item_name}</h1>
        <p className="ml-2 text-xs text-slate-400">
          {moment(props.itemData.createAt).format("M월 DD일")}
        </p>
      </div>
      <button
        onClick={async () => {
          await postCancelPurchase(props.itemData.id)
            .then((data) => {
              sucessToast(data.message);
            })
            .catch((err) => {
              console.log(err);
              errorToast("아이템 구입 취소 중 오류가 발생하였습니다.");
            });
          props.getDataFromBackend();
        }}
        className="w-16 text-xs text-white bg-blue-500 h-7 rounded-2xl"
      >
        취소하기
      </button>
    </div>
  );
}
