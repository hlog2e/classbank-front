import Lottie from "react-lottie";
import sendLottie from "../../../lottie/send.json";

export default function DoneSendMoney({
  isDone,
  handleStateReset,
  sendAmount,
  bankInfo,
}) {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: sendLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return isDone ? (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-40 flex items-center justify-center bg-neutral-100">
      <div className="w-full h-full bg-white px-6 max-w-[800px] flex flex-col  justify-between">
        <div className="flex flex-col items-center justify-center h-2/3 ">
          <div className="flex flex-col items-center ">
            <Lottie options={lottieOptions} width="250px" height="250px" />{" "}
            <p className="text-xl font-semibold ">
              {sendAmount + " " + bankInfo.money_name}
            </p>
            <p className="text-xl font-semibold ">송금을 완료했습니다</p>
          </div>
        </div>
        <button
          onClick={() => {
            handleStateReset();
          }}
          className="h-12 my-20 font-semibold text-white bg-blue-500 rounded-2xl"
        >
          돌아가기
        </button>
      </div>
    </div>
  ) : null;
}
