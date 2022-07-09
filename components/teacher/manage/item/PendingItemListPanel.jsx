export default function PendingItemListPanel(props) {
  return (
    <section className=" md:ml-20">
      <p className="p-4 ml-8 text-2xl font-semibold md:m-0 text-slate-400">
        판매 대기 중인 아이템 : {props.pendingItems.length}개
      </p>
      <header className="flex pb-6 overflow-x-auto ">
        {props.pendingItems.map((item) => {
          return <PendingItem key={item.itemId} itemData={item} />;
        })}
      </header>
    </section>
  );
}

function PendingItem(props) {
  return (
    <div className="flex flex-col justify-between flex-shrink-0 w-56 h-56 p-4 m-2 bg-white drop-shadow-xl rounded-3xl">
      <div className="h-24 ">
        <h1 className="text-lg font-bold leading-6">
          {props.itemData.itemName}
        </h1>
        <p className="mt-1 text-sm font-semibold text-slate-400">
          {props.itemData.itemDesc}
        </p>
      </div>
      <p className="text-xl font-bold text-slate-600">
        가격 : {props.itemData.itemPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </p>
      <div className="flex">
        <button className="text-sm font-bold text-white w-full m-[2px] h-8 bg-blue-500 rounded-xl">
          판매 시작
        </button>
        <button className="text-sm font-bold text-slate-500 w-full m-[2px] h-8 bg-slate-300 rounded-xl">
          삭제
        </button>
      </div>
    </div>
  );
}
