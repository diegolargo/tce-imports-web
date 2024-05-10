import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import banderaSpain from "../../images/banderaSpain.webp";
import banderaCanada from "../../images/banderaCanada.webp";
import banderaUsa from "../../images/banderaUsa.webp";
import banderaChina from "../../images/banderaChina.webp";

export default function SliderFlags() {
  return (
    <>
      <Swiper
        effect={"fade"}
        autoplay={{
          delay: 2500,
        }}
        loop={true}
        slidesPerView={1}
        grabCursor={true}
        modules={[Autoplay, EffectFade]}
        className="my-10 w-full max-w-80"
      >
        <SwiperSlide className="mx-auto gap-4 overflow-hidden rounded-md border border-zinc-200 bg-white/80 px-6 py-4 shadow-2xl dark:border-zinc-700 dark:bg-neutral-800">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-orange md:text-4xl">
              Autopartes
            </h2>
            <div className="dark:text-white">
              <svg
                width="70"
                height="64"
                viewBox="0 0 70 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.1384 36.0165L22.8513 26.1216L17.1384 16.2266H5.71286L3.53544 19.9981L5.11614 20.9107L6.76666 18.0519H16.0848L20.7437 26.1216L16.0848 34.1912H6.76666L2.1076 26.1216L3.95221 22.9268L2.37136 22.0141L0 26.1216L5.71286 36.0165H17.1384Z"
                  fill="currentColor"
                />
                <path
                  d="M11.4261 31.3423C14.3049 31.3423 16.6471 29.0003 16.6471 26.1213C16.6471 23.2424 14.3049 20.9004 11.4261 20.9004C8.54735 20.9004 6.2052 23.2425 6.2052 26.1213C6.2052 29.0001 8.5472 31.3423 11.4261 31.3423ZM14.8218 26.1215C14.8218 27.5834 13.8932 28.8325 12.5946 29.3098C11.2708 28.8246 10.3666 27.549 10.3666 26.1215C10.3666 24.694 11.2708 23.4184 12.5943 22.933C13.8929 23.4102 14.8218 24.6594 14.8218 26.1215ZM9.23473 23.5303C8.79164 24.3024 8.54127 25.1909 8.54127 26.1213C8.54127 27.0521 8.79179 27.9405 9.23488 28.7126C8.49883 28.0893 8.03034 27.1593 8.03034 26.1215C8.03034 25.0837 8.49883 24.1538 9.23473 23.5303Z"
                  fill="currentColor"
                />
                <path
                  d="M8.389 38.582L0.122559 49.5843L5.51767 62.2444L19.1791 63.902L27.4455 52.8998L22.0504 40.2399L8.389 38.582ZM18.353 61.9633L6.78381 60.5595L2.21495 49.8382L9.21525 40.5209L20.7844 41.9249L25.3531 52.6459L18.353 61.9633Z"
                  fill="currentColor"
                />
                <path
                  d="M16.0965 45.4998C14.5622 44.8824 12.8794 44.8994 11.3582 45.5479C9.83679 46.1961 8.65887 47.3981 8.04161 48.9323C7.42421 50.4666 7.4414 52.1493 8.08968 53.6707C8.73796 55.1921 9.93992 56.3699 11.4741 56.9871C12.2215 57.2881 13.004 57.4381 13.7861 57.4381C14.6095 57.4381 15.4322 57.2717 16.2124 56.9392C17.7338 56.2908 18.9117 55.089 19.5289 53.5547C20.1463 52.0205 20.1292 50.3379 19.4809 48.8165C18.8326 47.2951 17.6308 46.1171 16.0965 45.4998ZM12.0737 47.227C12.624 46.9926 13.2041 46.8752 13.7847 46.8752C14.3361 46.8752 14.8881 46.9809 15.4152 47.1931C15.8233 47.3573 16.1979 47.5777 16.531 47.8464C15.2188 47.5026 13.7966 47.5861 12.4756 48.1481C11.1429 48.7164 10.0913 49.6949 9.43173 50.8948C9.46701 50.4606 9.56771 50.0294 9.73488 49.6137C10.1702 48.5318 11.0009 47.6842 12.0737 47.227ZM17.8357 52.8734C17.4003 53.9552 16.5697 54.8029 15.4969 55.2599C14.4239 55.717 13.2372 55.7292 12.1555 55.2939C11.5031 55.0313 10.937 54.6244 10.4892 54.108C10.4102 52.2602 11.4695 50.5615 13.1908 49.8276C14.9024 49.0994 16.8515 49.5028 18.1324 50.8263C18.1994 51.5147 18.1011 52.2135 17.8357 52.8734Z"
                  fill="currentColor"
                />
                <path
                  d="M38.876 33.8605L40.0718 33.5069L39.5545 31.7566L38.876 31.9571V29.8008L40.0718 29.4471L39.5545 27.6967L38.876 27.8973V25.7409L40.0718 25.3872L39.5545 23.6368L38.876 23.8374V21.7088L40.1661 21.3273L39.6488 19.5769L38.876 19.8053V17.6489L40.1661 17.2674L39.6488 15.517L38.876 15.7454V13.589L40.1661 13.2075L39.6488 11.4571L38.876 11.6855V10.2537H44.0993V0H22.0776V10.2537H27.3009V15.1076L26.0105 15.4891L26.528 17.2396L27.3009 17.0111V19.1675L26.0105 19.549L26.528 21.2995L27.3009 21.071V23.2275L26.0105 23.6089L26.528 25.3594L27.3009 25.1309V27.2595L25.9162 27.6688L26.4337 29.4193L27.3007 29.1628V31.3193L25.9161 31.7286L26.4335 33.4791L27.3006 33.2226V35.3792L25.9159 35.7885L26.4334 37.539L27.3004 37.2825V39.888H38.8757V33.8605H38.876ZM23.9029 8.42844V1.82529H42.274V8.42844H38.876H27.3007H23.9029ZM29.1262 10.2537H37.0508V12.225L29.1262 14.568V10.2537ZM29.1262 16.4716L37.0508 14.1287V16.2851L29.1262 18.628V16.4716ZM29.1262 20.5315L37.0508 18.1886V20.345L29.1262 22.6879V20.5315ZM29.1262 24.5914L37.0508 22.2485V24.3771L29.1262 26.7201V24.5914ZM29.1262 28.6233L37.0508 26.2804V28.4367L29.1262 30.7796V28.6233ZM29.1262 32.6831L37.0508 30.3402V32.4967L29.1262 34.8395V32.6831ZM29.1262 38.063V36.7431L37.0508 34.4002V38.063H29.1262Z"
                  fill="currentColor"
                />
                <path
                  d="M62.7496 44.5291L70 37.2786L54.4283 21.707L47.1778 28.9575L50.8713 32.6509L47.4389 36.083L46.2569 35.4404L45.3853 37.044L46.0931 37.4289L44.5682 38.9539L43.386 38.3111L42.5145 39.9148L43.2224 40.2996L41.6976 41.8245L40.5155 41.1817L39.6439 42.7854L40.3518 43.1702L38.8465 44.6754L37.5781 43.9858L36.7064 45.5895L37.5008 46.0214L35.976 47.5462L34.7075 46.8567L33.8358 48.4603L34.6301 48.8922L33.1054 50.4169L31.837 49.7274L30.9652 51.3311L31.7595 51.7629L29.9174 53.6051L38.1023 61.7901L42.3645 57.5279L43.4601 58.1236L44.3317 56.5199L43.7102 56.1819L45.2351 54.6571L46.3308 55.2527L47.2023 53.649L46.5809 53.3112L48.1056 51.7863L49.2014 52.382L50.073 50.7783L49.4515 50.4405L50.9567 48.9352L52.1388 49.578L53.0105 47.9744L52.3026 47.5895L53.8273 46.0646L55.0095 46.7074L55.8809 45.1038L55.173 44.7189L56.6979 43.1941L57.8799 43.8367L58.7516 42.233L58.0437 41.8484L59.056 40.8359L62.7496 44.5291ZM54.4283 24.2883L67.4186 37.2786L62.7496 41.9477L60.3468 39.545L56.2543 35.4525L49.7592 28.9574L54.4283 24.2883ZM38.1015 59.209L32.498 53.6054L33.4312 52.6722L40.6914 56.6189L38.1015 59.209ZM42.0373 55.2732L34.7772 51.3265L36.3019 49.8016L43.5622 53.7484L42.0373 55.2732ZM44.9082 52.4025L37.6479 48.4558L39.1728 46.9309L46.4331 50.8776L44.9082 52.4025ZM47.7789 49.5318L40.5187 45.5849L42.0239 44.0796L49.2842 48.0264L47.7789 49.5318ZM50.63 46.6807L43.3698 42.7339L44.8945 41.2091L52.1547 45.1558L50.63 46.6807ZM53.5007 43.8099L46.2405 39.8632L47.7654 38.3382L55.0256 42.2851L53.5007 43.8099ZM56.3715 40.9392L49.1112 36.9922L52.1619 33.9417L54.9637 36.7433L57.7655 39.5452L56.3715 40.9392Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="mx-auto flex items-center justify-between gap-4 overflow-hidden rounded-md border border-zinc-200 bg-white px-6 py-4 shadow-2xl dark:border-zinc-700 dark:bg-neutral-800">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-orange md:text-4xl">
              Tecnologia
            </h2>
            <div className="dark:text-white">
              <svg
                width="70"
                height="68"
                viewBox="0 0 70 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M69.9114 6.66752C69.8035 2.616 66.6404 0.0228222 62.7378 0.0228222C60.1805 0.0228222 57.6182 0.0228222 55.0609 0.0228222C45.6177 0.0228222 36.1744 0.0228222 26.7363 0.0228222C20.1326 0.0228222 13.529 -0.0285278 6.92541 0.0228222C2.992 0.0536323 0.0496384 2.92923 0.0136933 6.88319C-0.0171167 9.90257 0.0136933 12.922 0.0136933 15.9362C0.0136933 24.3679 0.0136933 32.8047 0.0136933 41.2364C0.0136933 45.2057 2.40147 48.5743 6.64298 48.6821C8.51726 48.7283 10.3967 48.6821 12.2709 48.6821C15.3211 48.6821 18.3713 48.6821 21.4164 48.6821C21.4164 51.1418 21.4164 53.6066 21.4164 56.0663C20.6718 56.0663 19.9221 56.0663 19.1775 56.0663C17.4727 56.0663 15.7627 56.0663 14.0579 56.0663C13.1182 56.0663 13.1131 57.5297 14.0579 57.5297C16.7538 57.5297 19.4497 57.5297 22.1456 57.5297C29.6273 57.5297 37.109 57.5297 44.5907 57.5297C45.6485 57.5297 46.7063 57.5297 47.7641 57.5297C48.7552 57.5297 49.7462 57.5297 50.7373 57.5297C52.4421 57.5297 54.152 57.5297 55.8569 57.5297C56.7966 57.5297 56.8017 56.0663 55.8569 56.0663C53.4023 56.0663 50.9478 56.0663 48.4984 56.0663C48.4984 53.6066 48.4984 51.1418 48.4984 48.6821C53.0326 48.6821 57.5617 48.6821 62.0908 48.6821C62.5016 48.6821 62.9124 48.6821 63.3232 48.6821C66.3836 48.5794 69.1154 46.5357 69.7573 43.4701C69.9473 42.5561 69.9011 41.6112 69.9011 40.6869C69.9011 36.8716 69.9011 33.0614 69.9011 29.2461C69.9114 21.7285 70.1116 14.18 69.9114 6.66752ZM25.3293 56.0663C24.5128 56.0663 23.7015 56.0663 22.885 56.0663C22.885 53.6323 22.885 51.1983 22.885 48.7643C30.1254 48.7643 37.3606 48.7643 44.6009 48.7643C45.4123 48.7643 46.2287 48.7643 47.0452 48.7643C47.0452 51.1983 47.0452 53.6323 47.0452 56.0663C39.8048 56.0663 32.5696 56.0663 25.3293 56.0663ZM68.453 41.9861C68.3606 44.8822 66.2706 47.1159 63.3334 47.2186C48.8116 47.2186 34.295 47.2186 19.7732 47.2186C16.4508 47.2186 13.1285 47.2186 9.80614 47.2186C7.57242 47.2186 5.08194 47.5473 3.25901 45.9708C0.932858 43.9631 1.4823 40.5072 1.4823 37.7548C1.4823 33.4312 1.4823 29.1126 1.4823 24.7889C1.4823 20.4499 1.4823 16.1108 1.4823 11.7717C1.4823 9.4661 0.963668 6.1078 2.1858 4.02299C3.79306 1.29117 6.57623 1.48116 9.25156 1.48116C12.5123 1.48116 15.7679 1.48116 19.0286 1.48116C28.2768 1.48116 37.5249 1.48116 46.773 1.48116C52.2726 1.48116 57.803 1.29117 63.3026 1.48116C66.1885 1.57873 68.3452 3.74056 68.453 6.61103C68.4787 7.29912 68.453 7.99748 68.453 8.69071C68.453 12.5163 68.453 16.3419 68.453 20.1674C68.453 27.4283 68.679 34.7303 68.453 41.9861ZM61.1562 59.9483C60.1035 59.2037 58.9687 59.214 57.7619 59.214C54.0237 59.214 50.2905 59.214 46.5522 59.214C35.2141 59.214 23.8761 59.214 12.538 59.214C9.72399 59.214 6.8946 59.1216 4.08575 59.214C1.45663 59.3013 -0.612778 61.6685 0.203688 64.3131C0.804483 66.2592 2.58119 67.0706 4.46574 67.0808C13.452 67.1476 22.4383 67.0808 31.4245 67.0808C40.4159 67.0808 49.4227 67.2349 58.4141 67.0808C58.5733 67.0757 58.7325 67.0808 58.8916 67.0808C62.517 66.8549 64.345 62.2026 61.1562 59.9483ZM58.8865 65.6174C52.1391 65.6174 45.3917 65.6174 38.6495 65.6174C28.6054 65.6174 18.5665 65.6174 8.52239 65.6174C6.42218 65.6174 1.4823 66.4338 1.4823 63.1474C1.4823 59.8302 6.58136 60.6775 8.69185 60.6775C18.7256 60.6775 28.7543 60.6775 38.7881 60.6775C43.5123 60.6775 48.2416 60.6775 52.9659 60.6775C54.9788 60.6775 57.1817 60.4207 59.1843 60.7134C62.1883 61.1499 61.8802 65.4325 58.8865 65.6174ZM67.8574 59.481C68.2425 58.6389 68.1501 57.6478 67.3387 56.9597C66.476 56.2306 65.1872 56.1381 64.4683 55.2806C64.3091 55.0906 64.1961 54.7825 64.2064 54.5874C64.2064 54.5514 64.2166 54.4436 64.2166 54.4128C64.2269 54.3871 64.2629 54.2433 64.2731 54.2125C64.3193 54.0687 64.268 54.192 64.3193 54.0893C64.3758 53.9763 64.4426 53.8685 64.5145 53.7658C65.1461 52.8877 66.4812 52.4307 67.5801 52.2201C68.5044 52.0404 68.1141 50.6334 67.1898 50.808C65.2693 51.1777 62.4656 52.4923 62.7686 54.8852C62.8918 55.8865 63.6107 56.6568 64.4734 57.1241C65.0485 57.4373 65.7161 57.5708 66.2501 57.9611C66.4144 58.0792 66.5223 58.1973 66.5839 58.3C66.6506 58.3975 66.666 58.4489 66.6506 58.5516C66.6506 58.5619 66.6455 58.5773 66.6455 58.5927C66.6404 58.6184 66.6352 58.644 66.6301 58.6646C66.6198 58.7005 66.6096 58.7365 66.5941 58.7724C66.5941 58.7724 66.5941 58.7724 66.5941 58.7775C66.5582 58.8494 66.5171 58.9162 66.476 58.9881C66.4606 59.0137 66.4247 59.06 66.4042 59.0908C66.3528 59.1524 66.2963 59.2037 66.2398 59.2602C65.6031 59.3321 64.9766 59.5786 64.458 59.9997C63.7802 60.5542 63.3796 61.3707 63.2821 62.2334C63.2307 62.6904 63.2615 63.1628 63.2615 63.625C63.2615 65.4787 64.6788 67.086 66.5839 67.086C68.4068 67.0552 69.8806 65.5866 69.9062 63.7636C69.9114 63.3631 69.9114 62.9626 69.9062 62.562C69.896 61.7404 69.6084 60.9753 69.0692 60.3489C68.7354 59.9432 68.3144 59.6659 67.8574 59.481ZM68.0576 64.9036C67.729 65.3349 67.159 65.6071 66.589 65.6174C65.5517 65.6174 64.7404 64.7547 64.725 63.738C64.7199 63.3682 64.725 62.9985 64.725 62.6288C64.725 62.1615 64.8174 61.7815 65.1153 61.3861C65.7212 60.5902 66.9741 60.4361 67.7444 61.078C68.1757 61.4323 68.4222 61.9253 68.4428 62.4439C68.4582 62.8034 68.4428 63.168 68.4428 63.5274C68.453 64.0666 68.3965 64.462 68.0576 64.9036ZM65.4439 4.57244C58.5887 4.57244 51.7386 4.57244 44.8834 4.57244C33.9458 4.57244 23.0082 4.57244 12.0758 4.57244C9.54939 4.57244 7.02297 4.57244 4.49655 4.57244C4.10116 4.57244 3.76738 4.90621 3.76738 5.30161C3.76738 16.4343 3.76738 27.567 3.76738 38.6997C3.76738 40.2658 3.76738 41.832 3.76738 43.3931C3.76738 43.7885 4.10116 44.1222 4.49655 44.1222C11.3518 44.1222 18.207 44.1222 25.0571 44.1222C35.9947 44.1222 46.9322 44.1222 57.8646 44.1222C60.3911 44.1222 62.9175 44.1222 65.4439 44.1222C65.6442 44.1222 65.7931 44.0452 65.9112 43.9425C65.9266 43.9322 65.9471 43.9168 65.9625 43.9066C65.9728 43.8912 65.9831 43.8758 65.9985 43.8604C66.1063 43.7422 66.1833 43.5933 66.1833 43.3931C66.1833 32.2604 66.1833 21.1277 66.1833 9.995C66.1833 8.42882 66.1833 6.86265 66.1833 5.29647C66.1731 4.91134 65.8393 4.57244 65.4439 4.57244ZM44.8782 42.669C33.9407 42.669 23.0031 42.669 12.0707 42.669C9.78561 42.669 7.50566 42.669 5.22059 42.669C5.22059 31.7828 5.22059 20.8915 5.22059 10.0053C5.22059 8.68557 5.22059 7.36074 5.22059 6.04105C11.8293 6.04105 18.4432 6.04105 25.052 6.04105C35.9895 6.04105 46.9271 6.04105 57.8595 6.04105C60.1446 6.04105 62.4245 6.04105 64.7096 6.04105C64.7096 16.9324 64.7096 27.8186 64.7096 38.7048C64.7096 40.0245 64.7096 41.3493 64.7096 42.669C58.1009 42.669 51.4921 42.669 44.8782 42.669Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="mx-auto flex items-center justify-between gap-4 overflow-hidden rounded-md border border-zinc-200 bg-white px-6 py-4 shadow-2xl dark:border-zinc-700 dark:bg-neutral-800">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-orange md:text-4xl">
              Textiles
            </h2>
            <div className="dark:text-white">
              <svg
                width="78"
                height="62"
                viewBox="0 0 78 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.0106 6.81498C18.0106 6.81498 23.1139 15.4593 17.9976 23.7949"
                  stroke="currentColor"
                />
                <path
                  d="M50.53 3.99946C48.3909 20.4402 29.5132 20.4402 27.3741 3.99946C20.6717 4.52086 4 11.3066 4 11.3066L8.28312 24.7188L17.943 23.7956V58.5859H38.636H59.8688V23.7956L69.654 24.7188L74 11.3066C74 11.3066 57.2324 4.52086 50.53 3.99946Z"
                  stroke="currentColor"
                />
                <path
                  d="M60.1042 6.81498C60.1042 6.81498 55.0008 15.4593 60.1171 23.7949"
                  stroke="currentColor"
                />
                <path
                  d="M27.374 3.99912C27.374 3.99912 38.4322 7.89465 50.1732 3.99912"
                  stroke="currentColor"
                />
              </svg>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="mx-auto flex items-center justify-between gap-4 overflow-hidden rounded-md border border-zinc-200 bg-white px-6 py-4 shadow-2xl dark:border-zinc-700 dark:bg-neutral-800">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-orange md:text-4xl">
              Equipos Medicos
            </h2>
            <div className="dark:text-white">
              <svg
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M64.6828 9.89478H50.1918V5.30166C50.1901 3.89608 49.631 2.54854 48.6371 1.55464C47.6432 0.56074 46.2957 0.00164492 44.8901 0H25.0943C23.6888 0.00164492 22.3412 0.56074 21.3473 1.55464C20.3534 2.54854 19.7943 3.89608 19.7927 5.30166V9.89478H5.30166C3.89608 9.89643 2.54854 10.4555 1.55464 11.4494C0.56074 12.4433 0.00164492 13.7909 0 15.1964L0 60.4408C0.0259173 61.2554 0.229516 62.0545 0.59655 62.7821C0.963584 63.5098 1.48519 64.1485 2.12486 64.6535C2.76454 65.1585 3.50684 65.5176 4.29982 65.7057C5.0928 65.8938 5.91731 65.9064 6.71565 65.7425C6.80907 65.7433 6.89838 65.781 6.96415 65.8474C7.02992 65.9137 7.06682 66.0034 7.06681 66.0968C7.06764 67.1276 7.4775 68.116 8.2064 68.8449C8.9353 69.5738 9.92367 69.9836 10.9545 69.9845H19.4384C20.4692 69.9836 21.4576 69.5738 22.1865 68.8449C22.9154 68.116 23.3253 67.1276 23.3261 66.0968C23.3261 66.0502 23.3352 66.0042 23.353 65.9612C23.3709 65.9182 23.3969 65.8792 23.4298 65.8463C23.4627 65.8134 23.5018 65.7873 23.5448 65.7695C23.5878 65.7517 23.6338 65.7425 23.6804 65.7425H46.3041C46.3975 65.7433 46.4868 65.781 46.5526 65.8474C46.6184 65.9137 46.6553 66.0034 46.6553 66.0968C46.6569 67.1273 47.067 68.1152 47.7958 68.844C48.5245 69.5727 49.5124 69.9828 50.543 69.9845H59.0455C60.0763 69.9836 61.0647 69.5738 61.7936 68.8449C62.5225 68.116 62.9324 67.1276 62.9332 66.0968C62.9332 66.0502 62.9423 66.0042 62.9602 65.9612C62.978 65.9182 63.0041 65.8792 63.0369 65.8463C63.0698 65.8134 63.1089 65.7873 63.1519 65.7695C63.1949 65.7517 63.2409 65.7425 63.2875 65.7425C64.0856 65.9059 64.9098 65.8929 65.7023 65.7045C66.4949 65.5162 67.2368 65.157 67.8761 64.6521C68.5155 64.1471 69.0368 63.5086 69.4036 62.7812C69.7705 62.0538 69.974 61.2551 70 60.4408V15.1964C69.9975 13.7884 69.436 12.439 68.439 11.4448C67.4419 10.4507 66.0908 9.89313 64.6828 9.89478ZM21.9152 5.30166C21.916 4.45876 22.2512 3.65061 22.8473 3.05459C23.4433 2.45856 24.2514 2.12335 25.0943 2.12253H44.8901C45.7336 2.12253 46.5425 2.45737 47.1392 3.05349C47.7359 3.6496 48.0715 4.45822 48.0724 5.30166V9.89478H21.9152V5.30166ZM67.865 60.4408C67.8642 61.2843 67.5286 62.0929 66.9319 62.689C66.3352 63.2851 65.5262 63.62 64.6828 63.62C62.8182 63.4522 60.879 63.8717 60.7982 66.1061C60.7982 66.5751 60.6119 67.0248 60.2803 67.3564C59.9487 67.6881 59.4989 67.8744 59.03 67.8744H50.5461C50.0776 67.8735 49.6287 67.6869 49.2977 67.3553C48.9668 67.0238 48.7809 66.5745 48.7809 66.1061C48.7809 65.4467 48.519 64.8144 48.0527 64.3481C47.5865 63.8819 46.9541 63.62 46.2948 63.62H23.6804C23.021 63.62 22.3886 63.8819 21.9224 64.3481C21.4562 64.8144 21.1942 65.4467 21.1942 66.1061C21.1942 66.5751 21.0079 67.0248 20.6763 67.3564C20.3447 67.6881 19.8949 67.8744 19.426 67.8744H10.9545C10.4861 67.8735 10.0371 67.6869 9.70616 67.3553C9.37522 67.0238 9.18934 66.5745 9.18935 66.1061C9.11165 63.8686 7.15383 63.4646 5.30166 63.62C4.45847 63.6192 3.65 63.284 3.05348 62.6881C2.45697 62.0922 2.12107 61.284 2.11942 60.4408V27.568H9.88857C9.68657 29.3083 10.3827 31.0641 12.3747 31.1045H20.8524C22.8289 31.0641 23.5312 29.3052 23.3385 27.568H46.6708C46.4719 29.3083 47.1649 31.0641 49.1569 31.1045H57.6408C59.6173 31.0641 60.3196 29.3052 60.127 27.568H67.8961L67.865 60.4408ZM12.0173 28.6277V24.3858C12.0173 24.2924 12.0542 24.2027 12.12 24.1364C12.1857 24.07 12.2751 24.0323 12.3685 24.0315H20.8524C20.9463 24.0315 21.0365 24.0688 21.1029 24.1353C21.1693 24.2017 21.2067 24.2918 21.2067 24.3858V28.6277C21.2067 28.6743 21.1975 28.7203 21.1797 28.7633C21.1619 28.8063 21.1358 28.8454 21.1029 28.8783C21.07 28.9112 21.0309 28.9372 20.988 28.9551C20.945 28.9729 20.8989 28.982 20.8524 28.982H12.3685C12.2751 28.9812 12.1857 28.9435 12.12 28.8772C12.0542 28.8108 12.0173 28.7212 12.0173 28.6277ZM48.7809 28.6277V24.3858C48.7809 24.2924 48.8178 24.2027 48.8836 24.1364C48.9493 24.07 49.0387 24.0323 49.1321 24.0315H57.616C57.7099 24.0315 57.8 24.0688 57.8665 24.1353C57.9329 24.2017 57.9703 24.2918 57.9703 24.3858V28.6277C57.9703 28.6743 57.9611 28.7203 57.9433 28.7633C57.9255 28.8063 57.8994 28.8454 57.8665 28.8783C57.8336 28.9112 57.7945 28.9372 57.7516 28.9551C57.7086 28.9729 57.6625 28.982 57.616 28.982H49.1321C49.0403 28.9788 48.9533 28.9401 48.8896 28.874C48.8258 28.8079 48.7902 28.7196 48.7902 28.6277H48.7809ZM67.865 25.4486H60.0959C60.2979 23.7083 59.6049 21.9525 57.6098 21.9121H49.1321C47.1556 21.9494 46.4564 23.7083 46.6459 25.4486H23.3261C23.5281 23.7083 22.8351 21.9525 20.84 21.9121H12.3685C10.392 21.9494 9.68968 23.7083 9.88235 25.4486H2.11942V15.1964C2.12107 14.3533 2.45697 13.5451 3.05348 12.9492C3.65 12.3532 4.45847 12.0181 5.30166 12.0173H64.6828C65.5262 12.0173 66.3352 12.3522 66.9319 12.9483C67.5286 13.5444 67.8642 14.353 67.865 15.1964V25.4486ZM44.8901 40.9869H39.5885V35.6977C39.5885 35.4166 39.4768 35.1471 39.2781 34.9483C39.0793 34.7496 38.8098 34.638 38.5287 34.638H31.4588C31.1778 34.638 30.9082 34.7496 30.7095 34.9483C30.5108 35.1471 30.3991 35.4166 30.3991 35.6977V40.9993H25.0943C24.813 41.0002 24.5435 41.1125 24.3448 41.3117C24.1462 41.5109 24.0346 41.7808 24.0346 42.0621V49.129C24.0346 49.41 24.1463 49.6796 24.345 49.8783C24.5437 50.077 24.8133 50.1887 25.0943 50.1887H30.3991V55.4903C30.3987 55.6298 30.4258 55.7679 30.4789 55.8968C30.532 56.0258 30.6099 56.1429 30.7084 56.2417C30.8068 56.3404 30.9238 56.4187 31.0526 56.4722C31.1813 56.5256 31.3194 56.5532 31.4588 56.5532H38.535C38.8163 56.5523 39.0858 56.44 39.2845 56.2408C39.4831 56.0415 39.5947 55.7717 39.5947 55.4903V50.1887H44.8963C45.1774 50.1887 45.4469 50.077 45.6457 49.8783C45.8444 49.6796 45.956 49.41 45.956 49.129V42.0621C45.956 41.9223 45.9285 41.7839 45.8748 41.6547C45.8212 41.5256 45.7427 41.4083 45.6437 41.3095C45.5446 41.2108 45.4271 41.1326 45.2978 41.0793C45.1685 41.0261 45.03 40.9989 44.8901 40.9993V40.9869ZM43.818 48.0693H38.535C38.2536 48.0693 37.9838 48.1808 37.7845 48.3794C37.5853 48.5781 37.473 48.8476 37.4721 49.129V54.4306H32.5185V49.129C32.5185 48.8479 32.4069 48.5784 32.2082 48.3796C32.0094 48.1809 31.7399 48.0693 31.4588 48.0693H26.1572V43.1219H31.4588C31.7399 43.1219 32.0094 43.0102 32.2082 42.8115C32.4069 42.6127 32.5185 42.3432 32.5185 42.0621V36.7574H37.4659V42.0621C37.4667 42.3435 37.5791 42.613 37.7783 42.8117C37.9775 43.0103 38.2474 43.1219 38.5287 43.1219H43.818V48.0693Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="mx-auto flex items-center justify-between gap-4 overflow-hidden rounded-md border border-zinc-200 bg-white px-6 py-4 shadow-2xl dark:border-zinc-700 dark:bg-neutral-800">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-orange md:text-4xl">
              Juguetes
            </h2>
            <div className="dark:text-white">
              <svg
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35 0C15.68 0 0 15.68 0 35C0 54.3201 15.68 70 35 70C54.3201 70 70 54.32 70 35C70.0001 15.68 54.3201 0 35 0ZM36.4001 12.88L46.2002 4.76008C51.8002 7.00009 56.8402 10.64 60.4801 15.4001L56.28 26.3201L45.64 30.8001L36.4001 23.52V12.88ZM23.8 4.76008L33.6001 12.88V23.52L24.3601 31.0801L13.7201 26.6001L9.52002 15.4001C13.1601 10.64 17.92 6.99994 23.8 4.76008ZM8.68009 53.48C5.32008 48.7201 3.08008 42.84 2.80001 36.4001L13.44 29.4L23.2401 33.6001L26.8802 45.64L19.8803 52.9202L8.68009 53.48ZM44.2401 65.8002C41.4401 66.6401 38.3602 67.2001 35 67.2001C31.6398 67.2001 28.84 66.6401 25.7601 65.8002L22.68 54.0402L29.1199 47.6002H40.6L47.32 54.3203L44.2401 65.8002ZM49.5602 52.9202L42.8402 45.9202L46.4801 33.6002L56.2802 29.4001L67.2001 36.4001C66.9202 42.84 64.6801 48.7201 61.3202 53.48L49.5602 52.9202Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="absolute -top-3/4 left-0 grid grid-cols-2 place-items-center sm:-top-1/2 md:grid-cols-4">
        <img
          src={banderaUsa.src}
          alt="bandera de españa"
          className="w-2/3 opacity-30"
        />
        <img
          src={banderaCanada.src}
          alt="bandera de españa"
          className="w-2/3 opacity-30"
        />
        <img
          src={banderaChina.src}
          alt="bandera de españa"
          className="w-2/3 opacity-30"
        />
        <img
          src={banderaSpain.src}
          alt="bandera de españa"
          className="w-2/3 opacity-30"
        />
      </div>
    </>
  );
}
