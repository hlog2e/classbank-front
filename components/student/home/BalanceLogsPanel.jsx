import moment from "moment";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import { numToStringAndComma } from "../../../utils/comma";

export default function BalanceLogsPanel(props) {
  return (
    <section>
      <div className="w-full px-5 ">
        <h1 className="p-2 text-lg font-bold text-slate-500">최근 소비내역</h1>
        <div className="bg-white max-h-[400px] overflow-auto  shadow-md min-h-[300px] p-3 rounded-2xl">
          {props.balanceLogs.map((item) => {
            return (
              <LogItem
                key={item.id}
                logData={item}
                bankInfo={props.bankInfo}
                accountData={props.accountData}
              />
            );
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
        {props.logData.sender_id === props.accountData.user_uuid ? (
          <FaArrowCircleUp className="w-5 h-5 m-2 text-red-400" />
        ) : (
          <FaArrowCircleDown className="w-5 h-5 m-2 text-blue-400" />
        )}

        <div>
          <p className="text-sm font-semibold">
            {props.logData.sender_id === props.accountData.user_uuid
              ? "-"
              : "+"}
            {numToStringAndComma(props.logData.amount)}{" "}
            {props.bankInfo.money_name}
          </p>
          <p className="text-[10px] font-semibold text-slate-500">
            {props.logData.reason} | {props.logData.sender_name} -&gt;
            {" " + props.logData.receiver_name}
          </p>
        </div>
      </div>
      <p className="p-2 text-xs text-slate-400">
        {moment(props.logData.createdAt).format("M월 DD일 hh:mm")}
      </p>
    </div>
  );
}
