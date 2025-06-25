import { getTranslations } from "next-intl/server";
import { Link } from "../i18n/routing";

const Footer =async () => {
      const t = await getTranslations("HomePage");

  return (
    <footer className="container w-[85%] mx-auto mt-10 mb-10">
      <div className="flex justify-between md:flex-row flex-col">
        <div></div>
        <div>
          <ul className="flex md:flex-row flex-col gap-4 text-[16px] font-light">
            <li>
              <Link href="/">{t('navbar.home')}</Link>
            </li>
            <li>
              <Link href="/">{t('navbar.about')}</Link>
            </li>
            <li>
              <Link href="/services">{t('navbar.services')}</Link>
            </li>
            <li>
              <Link href="/branches">{t('navbar.branches')}</Link>
            </li>
            <li>
              <Link href="/join-us">{t('navbar.job')}</Link>
            </li>
            <li>
              <Link href="/partner">{t('navbar.partner-job')}</Link>
            </li>
            <li>
              <Link href="/contact">{t('navbar.contact')}</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="flex md:flex-row flex-col md:mt-0 mt-4 gap-4 text-[16px] font-light">
            <li>
              <Link href="/terms">AGB</Link>
            </li>
            <li>
              <Link href="/privacy">Datenschütz</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-8 text-[#1E1D1D]" />
      <div className="flex md:flex-row flex-col gap-4 justify-between items-center">
        <h2 className="font-bold text-[25px]">Bewerk GmbH</h2>
        <p>2025 Bewerk GmbH. All rights reserved.</p>
        <div className="flex gap-4">
          <div className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
            <svg
              width="10"
              height="16" 
              viewBox="0 0 9 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.69904 14.393L2.67857 8.09607H0V5.39738H2.67857V3.59825C2.67857 1.17015 4.17099 0 6.32088 0C7.35069 0 8.23577 0.0772455 8.4937 0.111771V2.64928L7.00264 2.64996C5.83342 2.64996 5.60703 3.20973 5.60703 4.03116V5.39738H8.92857L8.03571 8.09607H5.60702V14.393H2.69904Z"
                fill="#0081FE"
              />
            </svg>
          </div>
          <div className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
            <svg
              width="14"
              height="14flex justify-center items-center"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.86789 3.94232C10.2987 3.94232 10.6479 3.59311 10.6479 3.16232C10.6479 2.73154 10.2987 2.38232 9.86789 2.38232C9.43711 2.38232 9.08789 2.73154 9.08789 3.16232C9.08789 3.59311 9.43711 3.94232 9.86789 3.94232Z"
                fill="#0081FE"
              />
              <path
                d="M6.5 3.25C8.29238 3.25 9.75 4.70763 9.75 6.5C9.75 8.29238 8.29238 9.75 6.5 9.75C4.70763 9.75 3.25 8.29238 3.25 6.5C3.25 4.70763 4.70763 3.25 6.5 3.25ZM6.5 4.875C5.60381 4.875 4.875 5.60381 4.875 6.5C4.875 7.39619 5.60381 8.125 6.5 8.125C7.39619 8.125 8.125 7.39619 8.125 6.5C8.125 5.60381 7.39619 4.875 6.5 4.875Z"
                fill="#0081FE"
              />
              <path
                d="M9.75 0C11.4205 0 13 1.5795 13 3.25V9.75C13 11.4205 11.4205 13 9.75 13H3.25C1.5795 13 0 11.4205 0 9.75V3.25C0 1.5795 1.5795 0 3.25 0H9.75ZM3.25 1.625C2.49031 1.625 1.625 2.49031 1.625 3.25V9.75C1.625 10.5243 2.47569 11.375 3.25 11.375H9.75C10.5097 11.375 11.375 10.5097 11.375 9.75V3.25C11.375 2.49031 10.5097 1.625 9.75 1.625H3.25Z"
                fill="#0081FE"
              />
            </svg>
          </div>
          <div className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
            <svg
              width="16"
              height="13"
              viewBox="0 0 15 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.2857 1.34934C13.75 1.61921 13.2143 1.70917 12.5893 1.79913C13.2143 1.4393 13.6607 0.899563 13.8393 0.179913C13.3036 0.539738 12.6786 0.719651 11.9643 0.899563C11.4286 0.359825 10.625 0 9.82143 0C8.30357 0 6.96429 1.34935 6.96429 2.96856C6.96429 3.23843 6.96429 3.41834 7.05357 3.59825C4.64286 3.5083 2.41071 2.33886 0.982143 0.539738C0.714286 0.98952 0.625 1.4393 0.625 2.069C0.625 3.05852 1.16071 3.95808 1.96429 4.49782C1.51786 4.49782 1.07143 4.3179 0.625 4.13799C0.625 5.57729 1.60714 6.74673 2.94643 7.01659C2.67857 7.10655 2.41071 7.10655 2.14286 7.10655C1.96429 7.10655 1.78571 7.10655 1.60714 7.01659C1.96429 8.18603 3.03571 9.08559 4.375 9.08559C3.39286 9.8952 2.14286 10.345 0.714286 10.345C0.446429 10.345 0.267857 10.345 0 10.345C1.33929 11.1546 2.85714 11.6943 4.46429 11.6943C9.82143 11.6943 12.7679 7.19651 12.7679 3.32838C12.7679 3.23843 12.7679 3.05852 12.7679 2.96856C13.3929 2.51878 13.9286 1.97904 14.2857 1.34934Z"
                fill="#0081FE"
              />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
