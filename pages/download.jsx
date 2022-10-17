import { useEffect, useState } from "react";
import Logo from "../components/Logo";

import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";

export default function Download() {
  const [androidOpen, setAndroidOpen] = useState(false);
  const [iosOpen, setIosOpen] = useState(false);

  let deferredPrompt;
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      deferredPrompt = e;
    });
  }, []);

  const handleInstallApp = () => {
    console.log(deferredPrompt);
    if (!deferredPrompt) return setAndroidOpen(true);

    //홈화면의 추가를 실행시킨다
    deferredPrompt.prompt();
  };
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center">
      <div className=" w-[80%] text-2xl">
        <Logo className="" />
        <p className="font-semibold">앱 다운로드</p>
        <p className="mt-10 text-base font-semibold">
          자신의 운영체제 맞는 버튼을 눌러
        </p>
        <p className="text-base font-semibold ">앱을 설치해주세요!</p>
        <div className="mt-32">
          <button
            onClick={handleInstallApp}
            className="w-full h-10 text-base font-semibold text-white bg-blue-500 rounded-3xl "
          >
            안드로이드 (갤럭시)
          </button>
          <a href="https://apps.apple.com/app/id6443821048">
            <img
              className="w-full mt-4 max-h-16"
              src="/icons/download_appstore_kr.svg"
            />
          </a>

          {/* <button
            onClick={() => {
              setIosOpen(true);
            }}
            className="w-full h-10 mt-5 text-base font-semibold text-white bg-blue-500 rounded-3xl "
          >
            IOS (아이폰)
          </button> */}
        </div>
      </div>
      <AndroidBottomSheet
        open={androidOpen}
        onDismiss={() => {
          setAndroidOpen(false);
        }}
      />
      {/* <IosBottomSheet
        open={iosOpen}
        onDismiss={() => {
          setIosOpen(false);
        }}
      /> */}
    </div>
  );
}

function AndroidBottomSheet({ open, onDismiss }) {
  return (
    <BottomSheet
      open={open}
      onDismiss={onDismiss}
      footer={
        <button
          onClick={onDismiss}
          className="w-full h-12 font-semibold text-white bg-blue-500 rounded-full"
        >
          닫기
        </button>
      }
    >
      <div className="p-4">
        <p className="text-2xl font-semibold">앱이 설치되지 않나요?</p>

        <div className="flex items-center mt-5">
          <p>우측 상단에 해당 아이콘을 확인해주세요!</p>
          <img className="h-8 ml-2 w-7" src="/icons/android_download.png" />
        </div>
        <p className="mt-3 font-semibold">
          해당 아이콘이 없다면, 아직 설치가 준비되지 않은 것입니다. 잠시 후에
          다시 시도해주세요.
        </p>
      </div>
    </BottomSheet>
  );
}

// function IosBottomSheet({ open, onDismiss }) {
//   return (
//     <BottomSheet
//       open={open}
//       onDismiss={onDismiss}
//       footer={
//         <button
//           onClick={onDismiss}
//           className="w-full h-12 font-semibold text-white bg-blue-500 rounded-full"
//         >
//           닫기
//         </button>
//       }
//     >
//       <div className="p-4">
//         <p className="text-2xl font-semibold">IOS 앱 설치</p>

//         <div className="flex items-center mt-5">
//           <p className="mt-2 font-semibold">STEP 1 : 하단에 해당 아이콘 클릭</p>
//           <img className="w-8 h-8 ml-2" src="/icons/ios_share.png" />
//         </div>
//         <div className="flex items-center mt-4">
//           <p className="font-semibold ">
//             STEP 2 : &quot;홈 화면에 추가&quot; 클릭
//           </p>
//           <img className="w-8 h-8 ml-2" src="/icons/ios_add.png" />
//         </div>
//         <div className="flex mt-4 font-semibold">
//           <p>STEP 3 : 우측 상단에 &quot;</p>
//           <p className="text-blue-500 ">추가</p>
//           <p>&quot; 클릭</p>
//         </div>
//       </div>
//     </BottomSheet>
//   );
// }
