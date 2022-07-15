import moment from "moment";

export default function ItemPendingList(props) {
  return (
    <section className="px-6 py-2">
      <h1 className="p-2 font-semibold text-slate-500">
        구입 승인 대기중 {props.pendingItems.length}건
      </h1>
      <div className="w-full p-3 bg-white min-h-[280px] rounded-2xl shadow-md">
        {props.pendingItems.map((item) => {
          return <PendingItem key={item.itemId} itemData={item} />;
        })}
      </div>
    </section>
  );
}

function PendingItem(props) {
  return (
    <div className="flex items-center justify-between w-full h-12 p-4 mb-2 bg-neutral-100 rounded-xl">
      <div className="flex items-center">
        <h1 className="text-sm font-semibold">{props.itemData.itemName}</h1>
        <p className="ml-2 text-xs text-slate-400">
          {moment.unix(props.itemData.itemBuyDate).format("M월 DD일")}에 구입
        </p>
      </div>
      <button className="w-16 text-xs text-white bg-blue-500 h-7 rounded-2xl">
        취소하기
      </button>
    </div>
  );
}
