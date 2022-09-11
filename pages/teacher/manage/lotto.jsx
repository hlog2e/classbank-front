import TSideBar from "../../../components/teacher/TSideBar";
export default function Lotto() {
  return (
    <AuthRoute>
      <div className="flex flex-col lg:flex-row bg-neutral-100">
        <TSideBar />
      </div>
    </AuthRoute>
  );
}
