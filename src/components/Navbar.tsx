"use client";
import { Link, usePathname } from "../i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { useMemo, useState } from "react";
const Navbar = () => {
     const t =  useTranslations("HomePage");
  
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const purePath = useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length && (segments[0] === "de" || segments[0] === "en")) {
      return "/" + segments.slice(1).join("/");
    }
    return pathname;
  }, [pathname]);

  return (
    <nav key={locale} className="relative z-50 w-full px-4 md:px-0 bg-transparent">
      <div className=" container w-[85%] mx-auto flex justify-between items-center py-6">
        <div className="logo">
          <h4 className="text-[28px]">Bewerk</h4>
        </div>

        <div className="md:block hidden">
          <ul className="flex gap-4 text-[16px] text-white/80 font-light">
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

        {/* lang */}
        <div className="flex gap-2 pt-4 border-t border-white/20">
          <Link
            href={{
              pathname: purePath as
                | "/"
                | "/contact"
                | "/services"
                | "/branches"
                | "/partner"
                | "/join-us",
            }}
            locale="de"
            className={locale === "de" ? "text-[#2BA7FF]" : "text-white"}
          >
            DE
          </Link>
          <span>/</span>
          <Link
            href={{
              pathname: purePath as
                | "/"
                | "/contact"
                | "/services"
                | "/branches"
                | "/partner"
                | "/join-us",
            }}
            locale="en"
            className={locale === "en" ? "text-[#2BA7FF]" : "text-white"}
          >
            EN
          </Link>
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              width="35px"
              height="35px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Menu / Close_SM">
                <path
                  id="Vector"
                  d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          ) : (
            <svg
              width="35px"
              height="35px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 18L20 18"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 12L20 12"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 6L20 6"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
        {isOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full h-[100vh] bg-black px-4 py-6 space-y-4 text-white text-[16px] z-40 shadow-lg">
            <div className="logo flex justify-between">
              <h4 className="text-[28px]">Bewerk</h4>

              <button onClick={() => setIsOpen(false)}>
                {" "}
                <svg
                  width="35px"
                  height="35px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Menu / Close_SM">
                    <path
                      id="Vector"
                      d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </button>
            </div>

            <ul className="flex flex-col gap-4">
                <li>
              <Link href="/"  onClick={() => setIsOpen(false)}>{t('navbar.home')}</Link>
            </li>
            <li>
              <Link href="/"  onClick={() => setIsOpen(false)}>{t('navbar.about')}</Link>
            </li>
            <li>
              <Link href="/services" onClick={() => setIsOpen(false)}>{t('navbar.services')}</Link>
            </li>

            <li>
              <Link href="/branches" onClick={() => setIsOpen(false)}>{t('navbar.branches')}</Link>
            </li>
            <li>
              <Link href="/join-us" onClick={() => setIsOpen(false)}>{t('navbar.job')}</Link>
            </li>
            <li>
              <Link href="/partner" onClick={() => setIsOpen(false)}>{t('navbar.partner-job')}</Link>
            </li>
            <li>
              <Link href="/contact"  onClick={() => setIsOpen(false)}>{t('navbar.contact')}</Link>
            </li>
              
             
            </ul>

            {/* Mobile Language Switcher */}
          
      <div className="flex gap-2 pt-4 border-t border-white/20">
          <Link
            href={{
              pathname: purePath as
                | "/"
                | "/contact"
                | "/services"
                | "/branches"
                | "/partner"
                | "/join-us",
            }}
            locale="de"
            className={locale === "de" ? "text-[#2BA7FF]" : "text-white"}
          >
            DE
          </Link>
          <span>/</span>
          <Link
            href={{
              pathname: purePath as
                | "/"
                | "/contact"
                | "/services"
                | "/branches"
                | "/partner"
                | "/join-us",
            }}
            locale="en"
            className={locale === "en" ? "text-[#2BA7FF]" : "text-white"}
          >
            EN
          </Link>
        </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
