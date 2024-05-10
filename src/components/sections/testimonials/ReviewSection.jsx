import { useContador } from "./Contador.jsx";
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function ReviewSection() {
  const [reviews, setReviews] = useState(null);

  const contadorEntregas = useContador(0, 4500, 5, 10);
  const contadorClientes = useContador(0, 450, 10, 2);
  const contadorEmpresas = useContador(0, 80, 50, 2);
  const contadorAliados = useContador(0, 10, 500, 2);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://strapi-tceimports.onrender.com/api/comentarios?fields[0]=comment&fields[1]=author');
        const result = await response.json();
        if (result.data.length > 0) {
          setReviews(result.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);

  const statistics = [
    {
      count: contadorEntregas,
      description:
        "Entregas Exitosas. Precisión y eficiencia en cada operación",
    },
    {
      count: contadorClientes,
      description: "CLIENTES. Confianza y satisfacción en nuestra red.",
    },
    {
      count: contadorEmpresas,
      description: "EMPRESAS. Sinergia e innovación en colaboración.",
    },
    {
      count: contadorAliados,
      description:
        "Aliados logtisticos. Amplia cobertura para entregas eficaces.",
    },
  ];

  return (
    <section
      id="about"
      className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"
    >
      <div className="lg:grid lg:grid-cols-12 lg:items-center lg:justify-between lg:gap-16">
        <div className="lg:col-span-5 lg:col-start-1">
          <div className="mb-8">
            <h2 className="mb-2 text-3xl font-bold text-orange lg:text-4xl">
              Somos Tu Mejor Aliado en Importaciones
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              Importando Sueños desde el 2020
            </p>
          </div>
          <Swiper 
            autoplay={{
              delay: 2500
            }}
            slidesPerView={1}
            spaceBetween={30}
            grabCursor={true}
            modules={[Autoplay]}
            className="pl-9 pt-6">
            {reviews &&  
              reviews.map((review, index) => (
                <SwiperSlide key={index} className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-quote absolute start-0 top-0 h-16 w-16 -translate-x-6 -translate-y-8 rotate-180 transform text-neutral-300 dark:text-neutral-700"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
                    <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
                  </svg>

                  <div className="relative z-10">
                    <p className="text-xl italic text-neutral-800 dark:text-neutral-200">
                    {JSON.stringify(review.attributes.comment, null, 2)}
                    </p>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 rounded-full bg-zinc-300 p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-user"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        </svg>
                      </div>
                      <div className="ms-4 grow">
                        <div className="font-bold text-neutral-800 dark:text-neutral-200">
                        {review.attributes.author}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        <div className="mt-10 lg:col-span-6 lg:col-end-13 lg:mt-0">
          <div className="space-y-6 sm:space-y-8">
            <ul className="grid grid-cols-2 divide-x-2 divide-y-2 divide-neutral-300 overflow-hidden dark:divide-neutral-700">
              {statistics.map((stat, index) => (
                <li key={index} className="-m-0.5 flex flex-col p-4 sm:p-8">
                  <div className="mb-2 flex items-end gap-x-2 text-3xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-5xl">
                    {stat.count}+
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 sm:text-base">
                    {stat.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
