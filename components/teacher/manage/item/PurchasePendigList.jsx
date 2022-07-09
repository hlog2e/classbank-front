export default function PurchasePendingList(props) {
  return (
    <section className="px-8 md:px-24 md:py-10">
      <h1 className="p-4 text-2xl font-semibold text-slate-400">
        구입 승인 대기중
      </h1>
      <div className="bg-white md:w-[600px] w-full h-[500px] overflow-auto p-6 rounded-3xl">
        {props.purchaseItems.map((item) => {
          return <PurchaseListItem purchaseData={item} key={item.purchaseId} />;
        })}
      </div>
    </section>
  );
}

function PurchaseListItem(props) {
  return (
    <div className="flex items-center justify-between w-full p-4 mb-2 h-14 rounded-2xl bg-neutral-100">
      <div className="flex items-center">
        <p className="font-semibold">
          {props.purchaseData.purchaserNumber}{" "}
          {props.purchaseData.purchaserName}
        </p>
        <p className="ml-2 text-sm font-semibold text-slate-400">
          {props.purchaseData.itemName}
        </p>
        <p className="ml-5 text-xs text-slate-400">
          {props.purchaseData.purchaseDate}
        </p>
      </div>
      <div>
        <button className="px-3 py-1 font-semibold text-white bg-blue-500 rounded-xl">
          수락
        </button>
        <button className="px-3 py-1 ml-1 bg-slate-300 text-slate-500 rounded-xl">
          거절
        </button>
      </div>
    </div>
  );
}
