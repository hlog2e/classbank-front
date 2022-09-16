import TSideBar from "../../../components/teacher/TSideBar";
import AuthRoute from "../../../middlewares/AuthRoute";

export default function Lotto() {
  return (
    <AuthRoute isTeacherPage={true}>
      <div className="flex flex-col lg:flex-row bg-neutral-100">
        <TSideBar />
      </div>
    </AuthRoute>
  );
}
