import BottomNavBar from "../../components/student/BottomNavBar";

export default function StudentSendMoney() {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center bg-neutral-200">
      <div className="max-w-[800px] w-full bg-neutral-100 overflow-auto pb-32">
        <h1 className="mt-12 ml-6 text-4xl font-bold">송금</h1>
        <BottomNavBar />
      </div>
    </div>
  );
}
