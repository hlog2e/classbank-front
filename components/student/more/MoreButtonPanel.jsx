import { FiLogOut, FiRotateCw, FiHeadphones } from "react-icons/fi";
import { infoToast } from "../../../utils/toast";
import { postLogout } from "../../../apis/auth";
import { useRouter } from "next/router";

import { ChannelService } from "../../common/ChannelTalk";
import { useEffect } from "react";

export default function MoreButtonPanel() {
  const router = useRouter();

  useEffect(() => {
    const CHTalk = new ChannelService();
    CHTalk.boot({
      pluginKey: process.env.NEXT_PUBLIC_CHTALK_PUBLIC_KEY,
    });
    CHTalk.hideChannelButton();
    return () => {
      CHTalk.shutdown();
    };
  }, []);
  return (
    <section className="px-6 py-8">
      <div className="flex items-center justify-between ">
        <button
          onClick={() => {
            infoToast("개발 중 입니다!");
          }}
          className="flex flex-col items-center justify-between w-24 h-20 py-3 bg-white rounded-2xl"
        >
          <FiRotateCw className="text-slate-600 w-7 h-7" />
          <p className="text-sm text-slate-400">비밀번호 재설정</p>
        </button>
        <button
          onClick={() => {
            postLogout().then(() => {
              router.push("/app");
            });
          }}
          className="flex flex-col items-center justify-between w-24 h-20 py-3 bg-white rounded-2xl"
        >
          <FiLogOut className="text-red-500 w-7 h-7" />
          <p className="text-sm text-slate-400">로그아웃</p>
        </button>
        <button
          onClick={() => {
            window.ChannelIO("showMessenger");
          }}
          className="flex flex-col items-center justify-between w-24 h-20 py-3 bg-white rounded-2xl"
        >
          <FiHeadphones className="text-slate-600 w-7 h-7" />
          <p className="text-sm text-slate-400">지원</p>
        </button>
      </div>
    </section>
  );
}
