import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./styles.css";

import { EffectCards , Autoplay  } from "swiper/modules";
import Image from "next/image";

export default function TestimonialsSection() {
  return (
    <section
      className=" w-full mx-auto mt-20 md:mb-[200px] mb-[100px] p-20"
      style={{ backgroundImage: "url('/testimonial-bg.png')" }}
    >
      <div className="relative flex flex-col items-center justify-center mb-14">
        <div className=" bg-[#1E1D1D] w-full absolute z-10">
          <h2 className="font-bold md:text-[48px] text-[30px] text-center  ">
            Kundenmeinungen
          </h2>
        </div>
        <div>
          <svg
            width="96"
            height="123"
            viewBox="0 0 96 123"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M48.0007 0C46.8847 0 45.841 0.455486 45.2094 1.21825C43.3635 3.44702 0 56.1116 0 82.748C0 104.691 21.5328 122.543 48.0002 122.543C74.4677 122.543 96 104.691 96 82.748C96 56.1116 52.637 3.44702 50.791 1.21825C50.1604 0.45586 49.1162 0 48.0007 0ZM48.0007 116.929C25.2671 116.929 6.77205 101.595 6.77205 82.748C6.77205 61.5621 38.315 20.0979 48.0007 7.86677C57.6863 20.0979 89.2289 61.5617 89.2289 82.748C89.2289 101.595 70.7338 116.929 48.0007 116.929Z"
              fill="#2BA7FF"
              fill-opacity="0.36"
            />
            <path
              d="M44.6153 106.636C44.6153 108.186 46.1308 109.443 48.0011 109.443C65.7562 109.443 80.2014 97.4676 80.2014 82.7487C80.2014 81.1984 78.6859 79.9417 76.8156 79.9417C74.9453 79.9417 73.4298 81.1984 73.4298 82.7487C73.4298 94.3724 62.0224 103.829 48.0011 103.829C46.1308 103.829 44.6153 105.085 44.6153 106.636Z"
              fill="#2BA7FF"
              fill-opacity="0.36"
            />
          </svg>
        </div>
      </div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
          modules={[EffectCards, Autoplay]}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="mySwiper md:w-[394px] w-[320px] h-[344px]"
      >
        <SwiperSlide className="rounded-[16px] p-8">
          <div className="flex items-center gap-4">
            <div className="h-[70px] w-[70px] rounded-full overflow-hidden">
              <Image
                src="/person.jpg"
                alt="hero-image"
                width={600}
                height={600}
                className="w-full h-full object-cover "
              />
            </div>
            <h5 className="text-[16px] font-bold text-black">Nichole N. M.</h5>
          </div>
          <div className="flex gap-1 mt-6">
            {Array.from({ length: 5 }).map((_, index) => (
              <svg
                key={index}
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6786 6.30994C12.1564 3.65898 12.8952 2.3335 13.9999 2.3335C15.1046 2.3335 15.8435 3.65897 17.3212 6.30993L17.7035 6.99576C18.1235 7.74908 18.3334 8.12575 18.6609 8.37427C18.9882 8.6228 19.3959 8.71505 20.2114 8.89955L20.9538 9.06753C23.8234 9.71682 25.2583 10.0415 25.5996 11.1392C25.941 12.2369 24.9629 13.3808 23.0065 15.6684L22.5004 16.2602C21.9445 16.9103 21.6664 17.2353 21.5414 17.6375C21.4164 18.0396 21.4584 18.4733 21.5424 19.3407L21.619 20.1303C21.9147 23.1825 22.0626 24.7086 21.169 25.3871C20.2752 26.0655 18.9318 25.4469 16.2449 24.2099L15.5498 23.8898C14.7864 23.5382 14.4046 23.3624 13.9999 23.3624C13.5952 23.3624 13.2135 23.5382 12.45 23.8898L11.7549 24.2099C9.06805 25.4469 7.72463 26.0655 6.83093 25.3871C5.93723 24.7086 6.08511 23.1825 6.38089 20.1303L6.4574 19.3407C6.54146 18.4733 6.58348 18.0396 6.45842 17.6375C6.33338 17.2353 6.05542 16.9103 5.49949 16.2602L4.99337 15.6684C3.03705 13.3808 2.05888 12.2369 2.40024 11.1392C2.74161 10.0415 4.17642 9.71682 7.04605 9.06753L7.78846 8.89955C8.60391 8.71505 9.01164 8.6228 9.33902 8.37427C9.6664 8.12575 9.87637 7.74909 10.2963 6.99576L10.6786 6.30994Z"
                  fill="#FFBF00"
                />
              </svg>
            ))}
          </div>

          <p className="leading-[40px] mt-6 text-[16px] text-black/80">
            Bewerk hat unser Büro makellos gereinigt. Pünktlich, professionell
            und zuverlässig. Ich kann sie nur weiterempfehlen!
          </p>
        </SwiperSlide>
        <SwiperSlide className="rounded-[16px] p-8">
          <div className="flex items-center gap-4">
            <div className="h-[70px] w-[70px] rounded-full overflow-hidden">
              <Image
                src="/person.jpg"
                alt="hero-image"
                width={600}
                height={600}
                className="w-full h-full object-cover "
              />
            </div>
            <h5 className="text-[16px] font-bold text-black">Nichole N. M.</h5>
          </div>
          <div className="flex gap-1 mt-6">
            {Array.from({ length: 5 }).map((_, index) => (
              <svg
                key={index}
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6786 6.30994C12.1564 3.65898 12.8952 2.3335 13.9999 2.3335C15.1046 2.3335 15.8435 3.65897 17.3212 6.30993L17.7035 6.99576C18.1235 7.74908 18.3334 8.12575 18.6609 8.37427C18.9882 8.6228 19.3959 8.71505 20.2114 8.89955L20.9538 9.06753C23.8234 9.71682 25.2583 10.0415 25.5996 11.1392C25.941 12.2369 24.9629 13.3808 23.0065 15.6684L22.5004 16.2602C21.9445 16.9103 21.6664 17.2353 21.5414 17.6375C21.4164 18.0396 21.4584 18.4733 21.5424 19.3407L21.619 20.1303C21.9147 23.1825 22.0626 24.7086 21.169 25.3871C20.2752 26.0655 18.9318 25.4469 16.2449 24.2099L15.5498 23.8898C14.7864 23.5382 14.4046 23.3624 13.9999 23.3624C13.5952 23.3624 13.2135 23.5382 12.45 23.8898L11.7549 24.2099C9.06805 25.4469 7.72463 26.0655 6.83093 25.3871C5.93723 24.7086 6.08511 23.1825 6.38089 20.1303L6.4574 19.3407C6.54146 18.4733 6.58348 18.0396 6.45842 17.6375C6.33338 17.2353 6.05542 16.9103 5.49949 16.2602L4.99337 15.6684C3.03705 13.3808 2.05888 12.2369 2.40024 11.1392C2.74161 10.0415 4.17642 9.71682 7.04605 9.06753L7.78846 8.89955C8.60391 8.71505 9.01164 8.6228 9.33902 8.37427C9.6664 8.12575 9.87637 7.74909 10.2963 6.99576L10.6786 6.30994Z"
                  fill="#FFBF00"
                />
              </svg>
            ))}
          </div>

          <p className="leading-[40px] mt-6 text-[16px] text-black/80">
            Bewerk hat unser Büro makellos gereinigt. Pünktlich, professionell
            und zuverlässig. Ich kann sie nur weiterempfehlen!
          </p>
        </SwiperSlide>
       <SwiperSlide className="rounded-[16px] p-8">
          <div className="flex items-center gap-4">
            <div className="h-[70px] w-[70px] rounded-full overflow-hidden">
              <Image
                src="/person.jpg"
                alt="hero-image"
                width={600}
                height={600}
                className="w-full h-full object-cover "
              />
            </div>
            <h5 className="text-[16px] font-bold text-black">Nichole N. M.</h5>
          </div>
          <div className="flex gap-1 mt-6">
            {Array.from({ length: 5 }).map((_, index) => (
              <svg
                key={index}
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6786 6.30994C12.1564 3.65898 12.8952 2.3335 13.9999 2.3335C15.1046 2.3335 15.8435 3.65897 17.3212 6.30993L17.7035 6.99576C18.1235 7.74908 18.3334 8.12575 18.6609 8.37427C18.9882 8.6228 19.3959 8.71505 20.2114 8.89955L20.9538 9.06753C23.8234 9.71682 25.2583 10.0415 25.5996 11.1392C25.941 12.2369 24.9629 13.3808 23.0065 15.6684L22.5004 16.2602C21.9445 16.9103 21.6664 17.2353 21.5414 17.6375C21.4164 18.0396 21.4584 18.4733 21.5424 19.3407L21.619 20.1303C21.9147 23.1825 22.0626 24.7086 21.169 25.3871C20.2752 26.0655 18.9318 25.4469 16.2449 24.2099L15.5498 23.8898C14.7864 23.5382 14.4046 23.3624 13.9999 23.3624C13.5952 23.3624 13.2135 23.5382 12.45 23.8898L11.7549 24.2099C9.06805 25.4469 7.72463 26.0655 6.83093 25.3871C5.93723 24.7086 6.08511 23.1825 6.38089 20.1303L6.4574 19.3407C6.54146 18.4733 6.58348 18.0396 6.45842 17.6375C6.33338 17.2353 6.05542 16.9103 5.49949 16.2602L4.99337 15.6684C3.03705 13.3808 2.05888 12.2369 2.40024 11.1392C2.74161 10.0415 4.17642 9.71682 7.04605 9.06753L7.78846 8.89955C8.60391 8.71505 9.01164 8.6228 9.33902 8.37427C9.6664 8.12575 9.87637 7.74909 10.2963 6.99576L10.6786 6.30994Z"
                  fill="#FFBF00"
                />
              </svg>
            ))}
          </div>

          <p className="leading-[40px] mt-6 text-[16px] text-black/80">
            Bewerk hat unser Büro makellos gereinigt. Pünktlich, professionell
            und zuverlässig. Ich kann sie nur weiterempfehlen!
          </p>
        </SwiperSlide>
       <SwiperSlide className="rounded-[16px] p-8">
          <div className="flex items-center gap-4">
            <div className="h-[70px] w-[70px] rounded-full overflow-hidden">
              <Image
                src="/person.jpg"
                alt="hero-image"
                width={600}
                height={600}
                className="w-full h-full object-cover "
              />
            </div>
            <h5 className="text-[16px] font-bold text-black">Nichole N. M.</h5>
          </div>
          <div className="flex gap-1 mt-6">
            {Array.from({ length: 5 }).map((_, index) => (
              <svg
                key={index}
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6786 6.30994C12.1564 3.65898 12.8952 2.3335 13.9999 2.3335C15.1046 2.3335 15.8435 3.65897 17.3212 6.30993L17.7035 6.99576C18.1235 7.74908 18.3334 8.12575 18.6609 8.37427C18.9882 8.6228 19.3959 8.71505 20.2114 8.89955L20.9538 9.06753C23.8234 9.71682 25.2583 10.0415 25.5996 11.1392C25.941 12.2369 24.9629 13.3808 23.0065 15.6684L22.5004 16.2602C21.9445 16.9103 21.6664 17.2353 21.5414 17.6375C21.4164 18.0396 21.4584 18.4733 21.5424 19.3407L21.619 20.1303C21.9147 23.1825 22.0626 24.7086 21.169 25.3871C20.2752 26.0655 18.9318 25.4469 16.2449 24.2099L15.5498 23.8898C14.7864 23.5382 14.4046 23.3624 13.9999 23.3624C13.5952 23.3624 13.2135 23.5382 12.45 23.8898L11.7549 24.2099C9.06805 25.4469 7.72463 26.0655 6.83093 25.3871C5.93723 24.7086 6.08511 23.1825 6.38089 20.1303L6.4574 19.3407C6.54146 18.4733 6.58348 18.0396 6.45842 17.6375C6.33338 17.2353 6.05542 16.9103 5.49949 16.2602L4.99337 15.6684C3.03705 13.3808 2.05888 12.2369 2.40024 11.1392C2.74161 10.0415 4.17642 9.71682 7.04605 9.06753L7.78846 8.89955C8.60391 8.71505 9.01164 8.6228 9.33902 8.37427C9.6664 8.12575 9.87637 7.74909 10.2963 6.99576L10.6786 6.30994Z"
                  fill="#FFBF00"
                />
              </svg>
            ))}
          </div>

          <p className="leading-[40px] mt-6 text-[16px] text-black/80">
            Bewerk hat unser Büro makellos gereinigt. Pünktlich, professionell
            und zuverlässig. Ich kann sie nur weiterempfehlen!
          </p>
        </SwiperSlide>
        <SwiperSlide className="rounded-[16px] p-8">
          <div className="flex items-center gap-4">
            <div className="h-[70px] w-[70px] rounded-full overflow-hidden">
              <Image
                src="/person.jpg"
                alt="hero-image"
                width={600}
                height={600}
                className="w-full h-full object-cover "
              />
            </div>
            <h5 className="text-[16px] font-bold text-black">Nichole N. M.</h5>
          </div>
          <div className="flex gap-1 mt-6">
            {Array.from({ length: 5 }).map((_, index) => (
              <svg
                key={index}
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6786 6.30994C12.1564 3.65898 12.8952 2.3335 13.9999 2.3335C15.1046 2.3335 15.8435 3.65897 17.3212 6.30993L17.7035 6.99576C18.1235 7.74908 18.3334 8.12575 18.6609 8.37427C18.9882 8.6228 19.3959 8.71505 20.2114 8.89955L20.9538 9.06753C23.8234 9.71682 25.2583 10.0415 25.5996 11.1392C25.941 12.2369 24.9629 13.3808 23.0065 15.6684L22.5004 16.2602C21.9445 16.9103 21.6664 17.2353 21.5414 17.6375C21.4164 18.0396 21.4584 18.4733 21.5424 19.3407L21.619 20.1303C21.9147 23.1825 22.0626 24.7086 21.169 25.3871C20.2752 26.0655 18.9318 25.4469 16.2449 24.2099L15.5498 23.8898C14.7864 23.5382 14.4046 23.3624 13.9999 23.3624C13.5952 23.3624 13.2135 23.5382 12.45 23.8898L11.7549 24.2099C9.06805 25.4469 7.72463 26.0655 6.83093 25.3871C5.93723 24.7086 6.08511 23.1825 6.38089 20.1303L6.4574 19.3407C6.54146 18.4733 6.58348 18.0396 6.45842 17.6375C6.33338 17.2353 6.05542 16.9103 5.49949 16.2602L4.99337 15.6684C3.03705 13.3808 2.05888 12.2369 2.40024 11.1392C2.74161 10.0415 4.17642 9.71682 7.04605 9.06753L7.78846 8.89955C8.60391 8.71505 9.01164 8.6228 9.33902 8.37427C9.6664 8.12575 9.87637 7.74909 10.2963 6.99576L10.6786 6.30994Z"
                  fill="#FFBF00"
                />
              </svg>
            ))}
          </div>

          <p className="leading-[40px] mt-6 text-[16px] text-black/80">
            Bewerk hat unser Büro makellos gereinigt. Pünktlich, professionell
            und zuverlässig. Ich kann sie nur weiterempfehlen!
          </p>
        </SwiperSlide>
      <SwiperSlide className="rounded-[16px] p-8">
          <div className="flex items-center gap-4">
            <div className="h-[70px] w-[70px] rounded-full overflow-hidden">
              <Image
                src="/person.jpg"
                alt="hero-image"
                width={600}
                height={600}
                className="w-full h-full object-cover "
              />
            </div>
            <h5 className="text-[16px] font-bold text-black">Nichole N. M.</h5>
          </div>
          <div className="flex gap-1 mt-6">
            {Array.from({ length: 5 }).map((_, index) => (
              <svg
                key={index}
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6786 6.30994C12.1564 3.65898 12.8952 2.3335 13.9999 2.3335C15.1046 2.3335 15.8435 3.65897 17.3212 6.30993L17.7035 6.99576C18.1235 7.74908 18.3334 8.12575 18.6609 8.37427C18.9882 8.6228 19.3959 8.71505 20.2114 8.89955L20.9538 9.06753C23.8234 9.71682 25.2583 10.0415 25.5996 11.1392C25.941 12.2369 24.9629 13.3808 23.0065 15.6684L22.5004 16.2602C21.9445 16.9103 21.6664 17.2353 21.5414 17.6375C21.4164 18.0396 21.4584 18.4733 21.5424 19.3407L21.619 20.1303C21.9147 23.1825 22.0626 24.7086 21.169 25.3871C20.2752 26.0655 18.9318 25.4469 16.2449 24.2099L15.5498 23.8898C14.7864 23.5382 14.4046 23.3624 13.9999 23.3624C13.5952 23.3624 13.2135 23.5382 12.45 23.8898L11.7549 24.2099C9.06805 25.4469 7.72463 26.0655 6.83093 25.3871C5.93723 24.7086 6.08511 23.1825 6.38089 20.1303L6.4574 19.3407C6.54146 18.4733 6.58348 18.0396 6.45842 17.6375C6.33338 17.2353 6.05542 16.9103 5.49949 16.2602L4.99337 15.6684C3.03705 13.3808 2.05888 12.2369 2.40024 11.1392C2.74161 10.0415 4.17642 9.71682 7.04605 9.06753L7.78846 8.89955C8.60391 8.71505 9.01164 8.6228 9.33902 8.37427C9.6664 8.12575 9.87637 7.74909 10.2963 6.99576L10.6786 6.30994Z"
                  fill="#FFBF00"
                />
              </svg>
            ))}
          </div>

          <p className="leading-[40px] mt-6 text-[16px] text-black/80">
            Bewerk hat unser Büro makellos gereinigt. Pünktlich, professionell
            und zuverlässig. Ich kann sie nur weiterempfehlen!
          </p>
        </SwiperSlide>
        <SwiperSlide className="rounded-[16px] p-8">
          <div className="flex items-center gap-4">
            <div className="h-[70px] w-[70px] rounded-full overflow-hidden">
              <Image
                src="/person.jpg"
                alt="hero-image"
                width={600}
                height={600}
                className="w-full h-full object-cover "
              />
            </div>
            <h5 className="text-[16px] text-black font-bold">Nichole N. M.</h5>
          </div>
          <div className="flex gap-1 mt-6">
            {Array.from({ length: 5 }).map((_, index) => (
              <svg
                key={index}
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6786 6.30994C12.1564 3.65898 12.8952 2.3335 13.9999 2.3335C15.1046 2.3335 15.8435 3.65897 17.3212 6.30993L17.7035 6.99576C18.1235 7.74908 18.3334 8.12575 18.6609 8.37427C18.9882 8.6228 19.3959 8.71505 20.2114 8.89955L20.9538 9.06753C23.8234 9.71682 25.2583 10.0415 25.5996 11.1392C25.941 12.2369 24.9629 13.3808 23.0065 15.6684L22.5004 16.2602C21.9445 16.9103 21.6664 17.2353 21.5414 17.6375C21.4164 18.0396 21.4584 18.4733 21.5424 19.3407L21.619 20.1303C21.9147 23.1825 22.0626 24.7086 21.169 25.3871C20.2752 26.0655 18.9318 25.4469 16.2449 24.2099L15.5498 23.8898C14.7864 23.5382 14.4046 23.3624 13.9999 23.3624C13.5952 23.3624 13.2135 23.5382 12.45 23.8898L11.7549 24.2099C9.06805 25.4469 7.72463 26.0655 6.83093 25.3871C5.93723 24.7086 6.08511 23.1825 6.38089 20.1303L6.4574 19.3407C6.54146 18.4733 6.58348 18.0396 6.45842 17.6375C6.33338 17.2353 6.05542 16.9103 5.49949 16.2602L4.99337 15.6684C3.03705 13.3808 2.05888 12.2369 2.40024 11.1392C2.74161 10.0415 4.17642 9.71682 7.04605 9.06753L7.78846 8.89955C8.60391 8.71505 9.01164 8.6228 9.33902 8.37427C9.6664 8.12575 9.87637 7.74909 10.2963 6.99576L10.6786 6.30994Z"
                  fill="#FFBF00"
                />
              </svg>
            ))}
          </div>

          <p className="leading-[40px] mt-6 text-[16px] text-black/80">
            Bewerk hat unser Büro makellos gereinigt. Pünktlich, professionell
            und zuverlässig. Ich kann sie nur weiterempfehlen!
          </p>
        </SwiperSlide>
       
      </Swiper>
    </section>
  );
}
