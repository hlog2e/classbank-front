import BottomNavBar from "../../components/student/BottomNavBar";

export default function StudentLotto() {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center bg-neutral-200">
      <div className="max-w-[800px] w-full bg-neutral-100 overflow-auto pb-32">
        <p>복권</p>
        <BottomNavBar />
      </div>
    </div>
  );
}
