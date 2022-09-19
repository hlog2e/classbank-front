import { postEditItemStatus, postItemDelete } from "../../../../apis/item";
import { numToStringAndComma } from "../../../../utils/comma";
import { sucessToast } from "../../../../utils/toast";

export default function PendingItemListPanel(props) {
  return (
    <section className=" md:ml-20">
      <p className="p-4 ml-8 text-2xl font-semibold md:m-0 text-slate-400">
        판매 대기 중인 아이템
      </p>
      <header className="flex pb-6 overflow-x-auto ">
        {props.items.map((_item) => {
          if (_item.status === "pending") {
            return (
              <PendingItem
                key={_item.id}
                item={_item}
                setItems={props.setItems}
                itemsArray={props.items}
                bankData={props.bankData}
              />
            );
          } else {
            return null;
          }
        })}
      </header>
    </section>
  );
}

function PendingItem(props) {
  return (
    <div className="flex flex-col justify-between flex-shrink-0 w-56 h-56 p-4 m-2 bg-white drop-shadow-xl rounded-3xl">
      <div className="h-24 ">
        <h1 className="text-lg font-bold leading-6">{props.item.name}</h1>
        <p className="mt-1 text-sm font-semibold text-slate-400">
          {props.item.desc}
        </p>
      </div>
      <p className="text-xl font-bold text-slate-600">
        가격 : {numToStringAndComma(props.item.price)}{" "}
        {props.bankData.money_name}
      </p>
      <div className="flex">
        <button
          onClick={() => {
            postEditItemStatus(props.item.id, "onsale").then(() => {
              sucessToast(
                props.item.name + "을(를) 판매 상태로 변경하였습니다!"
              );
              //Items Array에 Object의 status 수정
              const changeObjIndex = props.itemsArray.findIndex(
                (_obj) => _obj.id == props.item.id
              );
              let objDeletedArray = props.itemsArray;
              objDeletedArray.splice(changeObjIndex, "1");

              props.setItems([
                ...objDeletedArray,
                { ...props.item, status: "onsale" },
              ]);
            });
          }}
          className="text-sm font-bold text-white w-full m-[2px] h-8 bg-blue-500 rounded-xl"
        >
          판매 시작
        </button>
        <button
          onClick={() => {
            postItemDelete(props.item.id).then(() => {
              sucessToast(props.item.name + "을(를) 삭제하였습니다!");
              const changeObjIndex = props.itemsArray.findIndex(
                (_obj) => _obj.id == props.item.id
              );
              let objDeletedArray = props.itemsArray;
              objDeletedArray.splice(changeObjIndex, "1");

              props.setItems([...objDeletedArray]);
            });
          }}
          className="text-sm font-bold text-slate-500 w-full m-[2px] h-8 bg-slate-300 rounded-xl"
        >
          삭제
        </button>
      </div>
    </div>
  );
}
