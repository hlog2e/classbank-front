import { useState } from "react";
import { numToStringAndComma } from "../../../utils/comma";
import { postNewPurchase } from "../../../apis/purchase";
import { errorToast, sucessToast } from "../../../utils/toast";

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
          return item.name.includes(e.target.value);
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
                  key={item.id}
                  itemData={item}
                  money_name={props.bankInfo.money_name}
                  getDataFromBackend={props.getDataFromBackend}
                />
              );
            })
          : props.items.map((item) => {
              return (
                <Item
                  key={item.id}
                  itemData={item}
                  money_name={props.bankInfo.money_name}
                  getDataFromBackend={props.getDataFromBackend}
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
        <h1 className="text-lg font-semibold">{props.itemData.name}</h1>
        <p className="mt-1 text-sm font-semibold text-slate-400">
          {props.itemData.desc}
        </p>
      </div>
      <div>
        <p className="py-4 text-xl font-bold text-slate-700">
          {numToStringAndComma(props.itemData.price)} {props.money_name}
        </p>
        <button
          onClick={async () => {
            await postNewPurchase(props.itemData)
              .then((data) => {
                sucessToast(data.message);
              })
              .catch((err) => {
                console.log(err);
                errorToast(props.itemData.name + " 구입을 실패하였습니다.");
              });
            props.getDataFromBackend();
          }}
          className="w-full h-10 font-semibold text-white bg-blue-500 rounded-xl"
        >
          구입하기
        </button>
      </div>
    </div>
  );
}
