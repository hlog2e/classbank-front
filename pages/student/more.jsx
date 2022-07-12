import BottomNavBar from "../../components/student/BottomNavBar";

export default function StudentMore() {
  return (
    <div className="flex justify-center w-screen bg-neutral-200">
      <div className="max-w-[800px] w-full bg-neutral-100 ">
        <p>더보기</p>
        <BottomNavBar />
      </div>
    </div>
  );
}
