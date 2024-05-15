import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import heroImage from "@images/hero-image.webp";
import heroVideo from "@images/hero-video.mp4";
export default function ModalCotizar() {
  let [modal, setModal] = useState(false);

  function closeModal() {
    setModal(false);
  }

  return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white dark:bg-neutral-800 p-6 text-left align-middle shadow-xl transition-all">
                  <video className="w-full h-full" src={heroVideo} autoPlay></video>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <div className="relative overflow-hidden animate-upDown">
        <img src={heroImage.src} alt="repartidores de tce imports" />
        <button
          onClick={() => setModal(true)}
          aria-label="mostrar video"
          className="cursor-pointer bg-white border-zinc-700 dark:text-white dark:bg-neutral-800 w-fit border p-4 rounded-full absolute top-1/2 left-1/2 hover:scale-105 transition-transform duration-300 -translate-x-1/2 -translate-y-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="icon icon-tabler icons-tabler-outline icon-tabler-player-play"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 4v16l13 -8z" />
          </svg>
        </button>
      </div>
    </>
  );
}
