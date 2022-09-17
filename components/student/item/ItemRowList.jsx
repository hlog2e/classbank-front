import { useState } from "react";

export default function ItemRowList(props) {
  const [onSearch, setOnSearch] = useState(false);
  const [filteredItems, SetFilteredItems] = useState([]);

  function handleSearch(e) {
    if (e.target.value === "") {
      setOnSearch(false);
    } else {
      setOnSearch(true);
      SetFilteredItems(
        props.items.filter((item) => {
          return item.itemName.includes(e.target.value);
        })
      );
    }
  }
  return (
    <section className="">
      <section className="p-6">
        <input
          className="w-full h-12 p-4 text-sm font-semibold shadow-md outline-none appearance-none focus:ring-blue-400 focus:ring-2 text-slate-500 rounded-xl"
          placeholder="아이템 이름으로 찾아보세요!"
          onChange={handleSearch}
        />
      </section>
      <section className="flex py-2 overflow-auto">
        {onSearch
          ? filteredItems.map((item) => {
              return (
                <Item
                  key={item.itemId}
                  itemData={item}
                  moneyName={props.bankInfo.moneyName}
                />
              );
            })
          : props.items.map((item) => {
              return (
                <Item
                  key={item.itemId}
                  itemData={item}
                  moneyName={props.bankInfo.moneyName}
                />
              );
            })}
      </section>
    </section>
  );
}

function Item(props) {
  return (
    <div className="flex flex-col justify-between flex-shrink-0 p-4 ml-4 bg-white shadow-md h-52 w-52 rounded-3xl">
      <div>
        <h1 className="text-lg font-semibold">{props.itemData.itemName}</h1>
        <p className="mt-1 text-sm font-semibold text-slate-400">
          {props.itemData.itemDesc}
        </p>
      </div>
      <div>
        <p className="py-4 text-xl font-bold text-slate-700">
          {props.itemData.itemPrice} {props.moneyName}
        </p>
        <button className="w-full h-10 font-semibold text-white bg-blue-500 rounded-xl">
          구입하기
        </button>
      </div>
    </div>
  );
}
