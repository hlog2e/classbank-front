import BottomNavBar from "../../components/student/BottomNavBar";
import CommingSoon from "../etc/comming-soon";
import AuthRoute from "../../middlewares/AuthRoute";

export default function StudentLotto() {
  return (
    <AuthRoute>
      <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center bg-neutral-200">
        <div className="max-w-[800px] w-full bg-neutral-100 overflow-auto pb-32">
          <CommingSoon />
          <BottomNavBar />
        </div>
      </div>
    </AuthRoute>
  );
}
