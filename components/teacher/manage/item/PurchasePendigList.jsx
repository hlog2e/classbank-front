export default function PurchasePendingList(props) {
  return (
    <section className="px-8 md:px-20 md:py-10">
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
      <div className="flex flex-col items-start ">
        <p className="text-sm font-semibold md:text-md">
          {props.purchaseData.purchaserNumber}{" "}
          {props.purchaseData.purchaserName}
        </p>
        <p className="text-xs font-semibold md:text-sm text-slate-400">
          {props.purchaseData.itemName}
        </p>
        {/* <p className="ml-5 text-[8px] md:text-xs text-slate-400">
          {props.purchaseData.purchaseDate}
        </p> */}
      </div>
      <div>
        <button className="px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded-xl md:text-md">
          수락
        </button>
        <button className="px-3 py-1 ml-1 text-xs bg-slate-300 text-slate-500 rounded-xl md:text-md">
          거절
        </button>
      </div>
    </div>
  );
}
