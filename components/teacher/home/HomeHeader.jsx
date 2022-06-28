import { BsCheckLg, BsPencilSquare } from "react-icons/bs";
import { useState } from "react";

export default function HomeHeader() {
  const [bankName, setBankName] = useState("OO은행");
  const [onChangeBankName, setOnChangeBankName] = useState(false);
  return (
    <>
      <header className="flex items-center py-12 mx-14 w-fit ">
        {!onChangeBankName ? (
          <>
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-[#56CCF2] to-[#2F80ED]">
              {bankName}
            </h1>
            <BsPencilSquare
              onClick={() => {
                setOnChangeBankName(!onChangeBankName);
              }}
              className="m-1 cursor-pointer text-slate-400"
              size="30"
            />
          </>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setOnChangeBankName(!onChangeBankName);
            }}
          >
            <input
              className="px-2 py-1 text-4xl font-bold bg-transparent border-b-2 focus:outline-none w-44"
              value={bankName}
              onChange={(e) => {
                setBankName(e.target.value);
              }}
            />
            <button>
              <BsCheckLg className="ml-1 text-green-400" size="25" />
            </button>
          </form>
        )}
      </header>
    </>
  );
}
