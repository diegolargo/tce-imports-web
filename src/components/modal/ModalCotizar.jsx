import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ModalCotizar() {
  let [modal, setModal] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_tc6v2hl", "template_ve232n6", form.current, {
        publicKey: "Nw4KKVA76gHZZRsnx",
      })
      .then(
        () => {
          setModal(false);
        },
        (error) => {
          setModal(false);
          alert(error.message);
        },
      );
  };

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

          <div className="fixed inset-0 overflow-y-auto z-50">
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
                <Dialog.Panel className="w-full z-50 max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-neutral-800 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="mb-6 text-center text-2xl font-bold leading-6 text-zinc-800 dark:text-white"
                  >
                    Pide Tu Cotización
                  </Dialog.Title>

                  <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="contact-form text-center"
                  >
                    <div className="flex flex-col gap-2 w-full">
                      <div className="flex gap-2 flex-col sm:flex-row">
                        <input
                          className="rounded-lg border border-neutral-400 py-2 pl-2 outline-none w-full sm:w-1/2"
                          type="text"
                          name="user_name"
                          placeholder="Tu nombre"
                          required
                        />
                        <input
                          className="rounded-lg border border-neutral-400 outline-none py-2 pl-2 w-full sm:w-1/2"
                          type="email"
                          name="user_email"
                          placeholder="Tu correo"
                          required
                        />
                      </div>

                      <div className="flex gap-2 flex-col sm:flex-row">
                        <input
                          className="rounded-lg border border-neutral-400 outline-none py-2 pl-2 w-full sm:w-1/2"
                          type="tel"
                          name="phone_number"
                          placeholder="Tu telefono"
                          required
                        />
                        <input
                          className="rounded-lg border border-neutral-400 outline-none py-2 pl-2 w-full sm:w-1/2"
                          type="text"
                          name="weight"
                          placeholder="Peso del Producto"
                          required
                        />
                      </div>

                      <div className="flex gap-2 flex-col sm:flex-row">
                        <input
                          className="rounded-lg border border-neutral-400 outline-none py-2 pl-2 w-full sm:w-1/2"
                          type="number"
                          name="value"
                          placeholder="Valor del Producto"
                          required
                        />
                        <input
                          className="rounded-lg border border-neutral-400 outline-none py-2 pl-2 w-full sm:w-1/2"
                          type="text"
                          name="product_url"
                          placeholder="Url del Produto"
                          required
                        />
                      </div>

                      <div className="flex">
                        <textarea
                          className="w-full min-h-20 max-h-40 rounded-lg border border-neutral-400 outline-none py-2 pl-2"
                          name="order"
                          placeholder="Escribe tu pedido"
                          required
                        ></textarea>
                      </div>

                      <div className="mt-6 flex justify-center gap-4">
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-lg border border-neutral-700 bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-800 transition-all duration-300 hover:bg-blue hover:text-white"
                        >
                          Enviar
                        </button>
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-lg border border-neutral-700 bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-800 transition-all duration-300 hover:bg-blue hover:text-white"
                          onClick={closeModal}
                        >
                          Cerrar
                        </button>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <div className="fixed bottom-8 left-1/2 z-50 w-full -translate-x-1/2 px-2 text-center sm:max-w-4xl">
        <button
          onClick={() => setModal(true)}
          className="bg-blue-600 from-orange-400 to-orange-600 relative inline-block overflow-hidden rounded-md bg-blue px-6 py-4 font-semibold text-white shadow-xl transition duration-300 hover:scale-105 hover:shadow-blue/60"
        >
          <span className="absolute -left-full top-0 block h-[2px] w-full animate-btn_anim1 bg-gradient-to-r from-transparent to-white"></span>
          <span className="absolute -top-full right-0 block h-full w-[2px] animate-btn_anim2 bg-gradient-to-b from-transparent to-white"></span>
          <span className="absolute -right-full bottom-0 block h-[2px] w-full animate-btn_anim3 bg-gradient-to-l from-transparent to-white"></span>
          <span className="absolute -bottom-full left-0 block h-full w-[2px] animate-btn_anim4 bg-gradient-to-t from-transparent to-white"></span>
          ¡Contáctanos! Estamos listos para asesorarte completamente GRATIS
        </button>
      </div>
    </>
  );
}
