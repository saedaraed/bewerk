"use client"
import { useTranslations } from "next-intl";
import ContactForm from "./ContactForm";

const Contact = () => {
         const t =  useTranslations("Contact");
  
  return (
    <section className="container w-[85%] mx-auto mt-40 bg-[#1E1D1D] rounded-[40px] md:p-20 p-12 flex md:flex-row flex-col">
      <div className="md:w-1/2 w-full md:pr-20">
        <h4 className="text-[20px] font-bold leading-[40px]">
           {t('title')}
        </h4>
        <p className="text-[16px] leading-[40px] text-white/80 mt-4">
          {t('description')}
        </p>
        <div className="flex items-center gap-2 mt-8">
          <svg
            width="14"
            height="18"
            viewBox="0 0 14 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 6.69041C0 3.32523 3.13 0.603516 7 0.603516C10.87 0.603516 14 3.32523 14 6.69041C14 10.3165 9.58 15.3164 7.77 17.2207C7.37 17.6381 6.64 17.6381 6.24 17.2207C4.42 15.3164 0 10.3165 0 6.69041ZM4.5 6.69082C4.5 7.89104 5.62 8.86512 7 8.86512C8.38 8.86512 9.5 7.89104 9.5 6.69082C9.5 5.49061 8.38 4.51652 7 4.51652C5.62 4.51652 4.5 5.49061 4.5 6.69082Z"
              fill="white"
            />
          </svg>
          <span className="text-[16px]"> {t('location')} </span>
        </div>
        <div className="flex justify-between mt-6">
          <div className="flex items-center gap-2">
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.6517 10.6478L13.3202 10.4032C12.7602 10.3442 12.2095 10.5213 11.8148 10.8839L10.1258 12.4355C7.52806 11.2212 5.39848 9.27328 4.07667 6.87842L5.77483 5.31839C6.16953 4.95579 6.3623 4.44984 6.29804 3.93545L6.03185 1.81044C5.92169 0.958748 5.14146 0.317871 4.20518 0.317871H2.61717C1.57992 0.317871 0.717071 1.11053 0.781326 2.06342C1.26783 9.26484 7.53724 15.0159 15.3671 15.4628C16.4044 15.5218 17.2672 14.7292 17.2672 13.7763V12.3174C17.2764 11.4657 16.5788 10.749 15.6517 10.6478Z"
                fill="white"
              />
            </svg>
            <span className="text-[16px]">{t('phone')}</span>
          </div>
           <div className="flex items-center gap-2">
            <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 0.822754H3C1.89543 0.822754 1 1.60138 1 2.56187V12.9965C1 13.957 1.89543 14.7357 3 14.7357H22C23.1046 14.7357 24 13.957 24 12.9965V2.56187C24 1.60138 23.1046 0.822754 22 0.822754Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.411 1.32861L12.5 9.08332L1.58899 1.32861" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            <span className="text-[16px]">{t('email')}</span>


           </div>
        </div>
      </div>

      <div className="md:w-1/2 w-ful md:mt-[-200px] mt-4">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
