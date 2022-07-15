export default function CommingSoon() {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center lg:flex-row">
      <img className="w-[250px]" src="/svgs/comming-soon.svg" />
      <div className="p-6 text-center ">
        <h1 className="text-lg font-bold text-slate-700">
          서비스 준비 중입니다.
        </h1>
        <p className="text-sm text-slate-500">
          빠른 시일 내로 완성된 모습으로 찾아뵙겠습니다!
        </p>
      </div>
    </div>
  );
}
