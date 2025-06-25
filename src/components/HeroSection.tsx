"use client";
import Image from "next/image";
import Button from "./Button";
import { useTranslations } from "next-intl"; 

const HeroSection = () => {
   const t =  useTranslations("HomePage");
  return (
    <section className="container w-[85%] mx-auto h-screen flex md:flex-row flex-col mt-20 gap-10 ">
      <div className="md:w-1/2 w-full md:mt-10 mt-0">
        <h1 className="font-bold md:text-[48px] text-[30px] md:mb-6 mb-4">Ihr Zuhause verdient die beste <span className="text-[#2BA7FF]">Reinigung</span> </h1>
        <p className="md:text-[20px] text-[16px] leading-[40px] md:mb-12 mb-6">
         {t('heroSection.description')}
        </p>
        <Button name={t('heroSection.bookNow')}/>
      </div>
      <div className="md:w-1/2 w-full  md:h-[70%] h-[50%] md:mt-0 mt-6">
<div className="w-full h-full rounded-[40px] rounded-tr-none overflow-hidden">
          <Image src="/hero-image.jpg" alt="hero-image" width={600} height={600} className="w-full h-full object-cover " /> 
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
