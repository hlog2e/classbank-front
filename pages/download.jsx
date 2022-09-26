import { useEffect, useRef } from "react";
import Logo from "../components/Logo";

export default function Download() {
  let deferredPrompt;
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      deferredPrompt = e;
    });
  }, []);

  const handleInstallApp = () => {
    console.log(deferredPrompt);
    if (!deferredPrompt)
      return console.log("deferredPrompt를 호출 할 수 없음.");

    //홈화면의 추가를 실행시킨다
    deferredPrompt.prompt();
  };
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center">
      <div className=" w-[80%] text-2xl">
        <Logo className="" />
        <p className="font-semibold">앱 다운로드</p>
        <p className="mt-10 text-base font-semibold">OS에 맞는 버튼을 눌러</p>
        <p className="text-base font-semibold ">앱을 설치해주세요!</p>
        <div className="mt-32">
          <button
            onClick={handleInstallApp}
            className="w-full h-10 text-base font-semibold text-white bg-blue-500 rounded-3xl "
          >
            안드로이드 (갤럭시)
          </button>
          <button className="w-full h-10 mt-5 text-base font-semibold text-white bg-blue-500 rounded-3xl ">
            IOS (아이폰)
          </button>
        </div>
      </div>
    </div>
  );
}
