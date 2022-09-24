import { useRef, useState } from "react";
import { postItemAdd } from "../../../../apis/item";
import { numRegexChecker } from "../../../../utils/regex";
import { sucessToast } from "../../../../utils/toast";

export default function ItemAddModal(props) {
  const [itemData, setItemData] = useState({ name: "", price: "", desc: "" });
  const modalBGRef = useRef();

  const handlePostItemDataToDB = async (e) => {
    e.preventDefault();
    const newItem = await postItemAdd(props.bankData.id, itemData);
    props.setItems([...props.items, newItem]);
    sucessToast(itemData.name + " 을(를) 추가했습니다!");
    //아이템 추가 후 Modal 상태값들 초기화
    setItemData({ name: "", price: "", desc: "" });
    props.handleModalClose();
  };
  return props.isOpen ? (
    <div
      ref={modalBGRef}
      onClick={(e) => {
        if (modalBGRef.current === e.target) {
          props.handleModalClose();
        }
      }}
      className="fixed top-0 bottom-0 left-0 right-0 z-10 w-screen h-screen backdrop-blur-sm "
    >
      <div className="fixed max-w-[600px]   w-full h-full bg-white drop-shadow-lg  left-[50%] top-[50%] -translate-x-1/2  -translate-y-1/2  max-h-[600px] rounded-2xl">
        <header className="p-4 ">
          <img
            onClick={() => {
              props.handleModalClose();
            }}
            className="absolute w-4 cursor-pointer top-4 left-"
            src="/icons/xmark.svg"
          />
          <h1 className="font-semibold text-center ">아이템 추가</h1>
        </header>
        <section className="p-4">
          <form className="" onSubmit={handlePostItemDataToDB}>
            <p className="ml-1 text-sm text-slate-400">아이템 이름</p>
            <input
              type="text"
              autoCapitalize="off"
              value={itemData.name}
              onChange={(e) => {
                setItemData({ ...itemData, name: e.target.value });
              }}
              className="w-full h-12 px-3 mt-2 border-none bg-slate-100 rounded-xl text-slate-500 focus:ring-1 focus:ring-blue-500"
            />
            <p className="mt-4 ml-1 text-sm text-slate-400">아이템 가격</p>
            <input
              type="text"
              autoCapitalize="off"
              value={itemData.price}
              onChange={(e) => {
                if (numRegexChecker(e.target.value)) {
                  setItemData({ ...itemData, price: e.target.value });
                }
              }}
              className="w-full h-12 px-3 mt-2 border-none bg-slate-100 rounded-xl text-slate-500 focus:ring-1 focus:ring-blue-500"
            />
            <p className="mt-10 ml-1 text-sm text-slate-400">아이템 설명</p>
            <input
              type="text"
              autoCapitalize="off"
              value={itemData.desc}
              onChange={(e) => {
                setItemData({ ...itemData, desc: e.target.value });
              }}
              className="w-full h-12 px-3 mt-2 border-none resize-none bg-slate-100 rounded-xl text-slate-500 focus:ring-1 focus:ring-blue-500"
            />
            <button className="w-full h-12 mt-16 font-semibold text-white bg-blue-500 rounded-xl">
              추가하기
            </button>
          </form>
        </section>
      </div>
    </div>
  ) : null;
}
