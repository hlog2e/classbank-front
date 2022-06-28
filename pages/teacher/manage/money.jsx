import TSideBar from "../../../components/teacher/TSideBar";
export default function Money() {
  return (
    <div className="flex flex-col h-screen lg:flex-row bg-neutral-100">
      <TSideBar />
      <section className="flex flex-col w-full lg:w-[calc(100vw-288px)] h-full "></section>
    </div>
  );
}
