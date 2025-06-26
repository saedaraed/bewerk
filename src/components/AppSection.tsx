"use client"
import Image from "next/image";
import Button from "./Button";
import { useTranslations } from "next-intl";

const AppSection = () => {
       const t =  useTranslations("HomePage.appSection");
    const features = t.raw("features") as { title: string; description: string }[];

  return (
    <section className="container w-[85%] mx-auto  mt-[150px]">
      <div className="relative flex flex-col items-center justify-center md:mb-14 mb-[150px]">
        <div className=" bg-black inline-block absolute z-10">
          <h2 className="font-bold md:text-[48px] text-[30px] text-center  ">
            {t('title')} 
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
      <div className="bg-[#100F0F] rounded-[40px] rounded-tr-none  md:p-20 p-12">
        <div className="flex md:flex-row flex-col gap-8">
          <div className="md:w-[40%] w-full mt-[-200px]">
            <Image
              src="/mobileapp.png"
              alt="mobile-app"
              width={600}
              height={600}
              className="w-full h-full object-cover "
            />
          </div>
          <p className="md:w-[60%] w-full md:leading-[40px] leading-[30px] md:text-[20px] text-[16px] text-white/80">
           {t('description')} 
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {features.map((feature, index) => (
<div key={index}>
            <h4 className="text-[20px] mt-4 font-medium">
              {feature.title}
            </h4>
            <p className="text-[16px] text-white/80 mt-2">
             {feature.description}
            </p>
          </div>
           ))}
          
        </div> 
        <div className="flex md:flex-row flex-col gap-4 justify-center items-center mt-8 ">
          <p className="text-[20px]">
{t('footer.text')}           </p>
          <Button name={t('footer.button')} />
        </div>
      </div>
    </section>
  );
};

export default AppSection;
