import { FaMoneyBillWave } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { infoToast } from "../../../utils/toast";

export default function MoreServicePanel() {
  return (
    <section className="p-6">
      <h1 className="text-xl font-semibold">서비스</h1>
      <div
        onClick={() => {
          infoToast("개발 중 입니다!");
        }}
        className="flex items-center py-2 mt-3 cursor-pointer"
      >
        <GiReceiveMoney className="w-6 h-6 text-yellow-400" />
        <p className="ml-3 font-semibold">우리 학급 이자보기</p>
      </div>
      <div
        onClick={() => {
          infoToast("개발 중 입니다!");
        }}
        className="flex items-center py-2 cursor-pointer "
      >
        <FaMoneyBillWave className="w-6 h-6 text-green-300 " />
        <p className="ml-3 font-semibold">복권</p>
      </div>
    </section>
  );
}
