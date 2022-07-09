export default function SellingItemListPanel(props) {
  return (
    <section className="px-8 py-10 md:px-20">
      <p className="p-4 text-2xl font-semibold text-slate-400">
        판매중인 아이템 : {props.sellingItems.length}개
      </p>
      <header className="flex pb-6 overflow-x-auto">
        {props.sellingItems.map((item) => {
          return <SellingItem key={item.itemId} itemData={item} />;
        })}
      </header>
    </section>
  );
}

function SellingItem(props) {
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
          판매 중지
        </button>
        <button className="text-sm font-bold text-slate-500 w-full m-[2px] h-8 bg-slate-300 rounded-xl">
          삭제
        </button>
      </div>
    </div>
  );
}
