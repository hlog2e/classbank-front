import { FaCommentDollar } from "react-icons/fa";

export default function BalanceDisplay(props) {
  return (
    <section>
      <div className="w-full px-5 py-8">
        <div className="w-full p-5 bg-white shadow-lg h-60 rounded-3xl">
          <div className="mt-3 bg-neutral-100 h-28 rounded-2xl">
            <p className="px-4 py-2 font-semibold">잔액</p>
            <h1 className="text-2xl font-bold text-center">
              {props.accountData.balance.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              {" " + props.bankInfo.moneyName}
            </h1>
          </div>
          <button className="w-full h-12 mt-4 font-semibold text-white bg-blue-500 rounded-2xl">
            <div className="flex items-center justify-center">
              <FaCommentDollar className="w-4 h-4 mr-1" />
              <p>송금하기</p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
