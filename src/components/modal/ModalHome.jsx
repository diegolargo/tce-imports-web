import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useEffect } from 'react'

export default function MyModal() {
  let [modal, setModal] = useState(false)
  let [title, setTitle] = useState('')
  let [image, setImage] = useState('')

  function closeModal() {
    setModal(false)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://strapi-tceimports.onrender.com/api/anuncios?populate[img][fields][0]=url');
        const data = await response.json();
        console.log(data.data[0]);
        if (data.data.length > 0) {
          const title = data.data[0].attributes.title
          const image = data.data[1].attributes.img.data[0].attributes.url
          setTitle(title);
          setImage(image);
          setModal(true)
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold leading-6 text-zinc-800 text-center mb-6"
                  >
                    {title}
                  </Dialog.Title>

                  <img className='rounded-xl' src={image} alt={title} />

                  <div className="mt-6 flex justify-center">
                    <button
                      type="button"
                      className="inline-flex text-zinc-800 justify-center rounded-lg border border-zinc-800 bg-zinc-100 px-4 py-2 text-sm font-medium hover:bg-blue hover:text-white transition-all duration-300"
                      onClick={closeModal}
                    >
                      Cerrar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
