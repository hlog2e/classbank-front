import moment from "moment";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";

export default function BalanceLogsPanel(props) {
  return (
    <section>
      <div className="w-full px-5 ">
        <h1 className="p-2 text-lg font-bold text-slate-500">최근 소비내역</h1>
        <div className="bg-white shadow-md min-h-[300px] p-3 rounded-2xl">
          {props.balanceLogs.map((item) => {
            return <LogItem logData={item} bankInfo={props.bankInfo} />;
          })}
        </div>
      </div>
    </section>
  );
}

function LogItem(props) {
  return (
    <div className="flex items-center justify-between h-16 rounded-xl">
      <div className="flex items-center ">
        {props.logData.transactionType === "plus" ? (
          <FaArrowCircleDown className="w-5 h-5 m-4 text-blue-400" />
        ) : (
          <FaArrowCircleUp className="w-5 h-5 m-4 text-red-400" />
        )}

        <div>
          <p className="text-sm font-semibold">
            {props.logData.transactionType === "plus" ? "+" : "-"}
            {props.logData.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            {" " + props.bankInfo.moneyName}
          </p>
          <p className="text-xs font-semibold text-slate-500">
            {props.logData.reason} | {props.logData.senderName} ->
            {" " + props.logData.receiverName}
          </p>
        </div>
      </div>
      <p className="p-2 text-xs text-slate-400">
        {moment.unix(props.logData.timestamp).format("M월 D일 HH:MM")}
      </p>
    </div>
  );
}
