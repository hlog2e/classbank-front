import { useRef } from "react";

export default function Modal(props) {
  const modalBGRef = useRef();
  return props.isOpen ? (
    <div
      ref={modalBGRef}
      onClick={(e) => {
        if (modalBGRef.current === e.target) {
          props.handleModalClose();
        }
      }}
      className="fixed top-0 bottom-0 left-0 right-0 z-10 w-screen h-screen backdrop-blur-sm "
    >
      <div className="fixed z-50  bg-white drop-shadow-lg w-96 left-[50%] top-[50%] -translate-x-1/2  -translate-y-1/2  h-96 rounded-2xl">
        <header className="p-4 border-b ">
          <img
            onClick={() => {
              props.handleModalClose();
            }}
            className="absolute w-4 cursor-pointer top-4 left-"
            src="/icons/xmark.svg"
          />
          <h1 className="font-semibold text-center ">
            {props.modalData.title}
          </h1>
        </header>
        <p className="p-5 ">{props.modalData.index}</p>
        <p className="absolute text-sm bottom-4 right-5 text-slate-500">
          {props.modalData.date}
        </p>
      </div>
    </div>
  ) : null;
}
