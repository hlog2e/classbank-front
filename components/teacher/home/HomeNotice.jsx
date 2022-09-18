import moment from "moment";
import { useState } from "react";
import Modal from "../../common/Modal";

export default function HomeNotice(props) {
  return (
    <section className="flex lg:max-w-[700px] w-full md:px-16 md:py-10 py-6 ">
      <div className="w-full m-2 bg-white  shadow-xl max-h-[500px] rounded-3xl p-8 ">
        <h1 className="px-1 text-2xl font-bold">공지</h1>
        <hr width="100%" className="mt-2" />
        <div className="h-[95%] my-2 overflow-scroll ">
          {props.noticeData.map((_noticeData) => {
            return <NoticeItem key={_noticeData.id} noticeData={_noticeData} />;
          })}
        </div>
      </div>
    </section>
  );
}

function NoticeItem(props) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setModalOpen(true);
        }}
        className="flex items-center justify-between h-12 p-2 my-1 cursor-pointer hover:bg-neutral-100 rounded-xl"
      >
        <p className="font-semibold text-slate-600">{props.noticeData.title}</p>
        <p className="text-sm text-slate-400">
          {moment(props.noticeData.createdAt).format("YYYY-MM-DD")}
        </p>
      </div>
      <Modal
        handleModalClose={() => {
          setModalOpen(false);
        }}
        isOpen={modalOpen}
        modalData={props.noticeData}
      />
    </>
  );
}
