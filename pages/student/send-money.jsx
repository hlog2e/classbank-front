import BottomNavBar from "../../components/student/BottomNavBar";

export default function StudentSendMoney() {
  return (
    <div className="flex justify-center w-screen bg-neutral-200">
      <div className="max-w-[800px] w-full bg-neutral-100 ">
        <p>송금</p>
        <BottomNavBar />
      </div>
    </div>
  );
}
