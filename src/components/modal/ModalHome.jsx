import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, useEffect } from 'react';

export default function MyModal() {
  const [modal, setModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga

  function closeModal() {
    setModal(false);
  }

  const updateImage = (index) => {
    if (images.length > 0 && images[index]) {
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://strapi-tceimports.onrender.com/api/anuncios?populate[img][fields][0]=url');
        const data = await response.json();
        if (data.data.length > 0) {
          setImages(data.data);
          setLoading(false); // Datos cargados, dejar de mostrar el estado de carga
          setModal(true); // Mostrar el modal después de que las imágenes estén listas
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // En caso de error, dejar de mostrar el estado de carga
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {images.length > 0 && (
                    <>
                      <Dialog.Title
                        as="h3"
                        className="text-2xl font-bold leading-6 text-zinc-800 text-center mb-6"
                      >
                        {images[currentIndex].attributes.title}
                      </Dialog.Title>

                      <img
                        className="rounded-xl"
                        src={images[currentIndex].attributes.img.data[0].attributes.url}
                        alt={images[currentIndex].attributes.title}
                      />

                      <div className="mt-4 flex justify-between items-center">
                        <button
                          type="button"
                          className="px-4 py-2 bg-gray-300 rounded-full"
                          onClick={() => updateImage((currentIndex - 1 + images.length) % images.length)}
                        >
                          &#8592; {/* Flecha hacia la izquierda */}
                        </button>
                        <button
                          type="button"
                          className="px-4 py-2 bg-gray-300 rounded-full"
                          onClick={() => updateImage((currentIndex + 1) % images.length)}
                        >
                          &#8594; {/* Flecha hacia la derecha */}
                        </button>
                      </div>

                      <div className="mt-6 flex justify-center">
                        <button
                          type="button"
                          className="inline-flex text-zinc-800 justify-center rounded-lg border border-zinc-800 bg-zinc-100 px-4 py-2 text-sm font-medium hover:bg-blue hover:text-white transition-all duration-300"
                          onClick={closeModal}
                        >
                          Cerrar
                        </button>
                      </div>
                    </>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
