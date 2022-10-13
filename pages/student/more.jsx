import BottomNavBar from "../../components/student/BottomNavBar";
import MoreButtonPanel from "../../components/student/more/MoreButtonPanel";
import MoreServicePanel from "../../components/student/more/MoreServicePanel";
import AuthRoute from "../../middlewares/AuthRoute";

export default function StudentMore() {
  return (
    <AuthRoute isTeacherPage={false}>
      <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center bg-neutral-200">
        <div className="max-w-[800px] w-full bg-neutral-100 overflow-auto pb-32">
          <h1 className="mt-20 ml-6 text-4xl font-bold">더보기</h1>
          <MoreButtonPanel />
          <hr className="mx-6" />
          <MoreServicePanel />
          <BottomNavBar />
        </div>
      </div>
    </AuthRoute>
  );
}
