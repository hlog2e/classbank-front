import { BeatLoader } from "react-spinners";

export default function LoadingPage({ loading }) {
  return loading ? (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <BeatLoader loading={loading} color={"#94a3b8"} size={20} />
    </div>
  ) : null;
}
