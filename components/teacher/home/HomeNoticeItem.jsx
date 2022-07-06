import Modal from "../../common/Modal";

export default function HomeNoticeItem(props) {
  //const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="flex items-center justify-between h-12 p-5 my-2 cursor-pointer hover:bg-neutral-100 rounded-xl">
      <p className="font-semibold ">{props.noticeData.title}</p>
      <p className="text-sm text-slate-400">{props.noticeData.date}</p>
      <Modal isOpen={true}></Modal>
    </div>
  );
}
