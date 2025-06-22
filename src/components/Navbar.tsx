"use client";
import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import {  useState } from "react";
const Navbar = () => {
  const locale = useLocale();
  // const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // const purePath = useMemo(() => {
  //   const segments = pathname.split("/").filter(Boolean);
  //   if (segments.length && (segments[0] === "de" || segments[0] === "en")) {
  //     return "/" + segments.slice(1).join("/");
  //   }
  //   return pathname;
  // }, [pathname]);
  return (
        <nav className="relative z-50 w-full px-4 md:px-0 bg-transparent">

    <div className=" container w-[85%] mx-auto flex justify-between items-center py-6">
      <div className="logo">
        <h4 className="text-[28px]">Bewerk</h4>
      </div>

      <div className="md:block hidden">
        <ul className="flex gap-4 text-[16px] text-white/80 font-light">
          {/* <li><Link href="/">{t('navigation.home')}</Link></li> */}
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>

          <li>
            <Link href="/branches">Branches</Link>
          </li>
          <li>
            <Link href="/join-us">Job</Link>
          </li>
          <li>
            <Link href="/partner">Partner Job</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* lang */}
      <div className="flex gap-1">
        <Link
          href='/'
          locale="de"
          className={locale === "de" ? "text-[#2BA7FF]" : "text-white"}
        >
          DE
        </Link>
        <span>/</span>
        <Link
          href='/'
          locale="de"
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
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
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M4 12L20 12"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M4 6L20 6"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        )}
      </button>
        {isOpen && (

        <div className="md:hidden absolute top-0 left-0 w-full h-[100vh] bg-black px-4 py-6 space-y-4 text-white text-[16px] z-40 shadow-lg">
         <div className="logo flex justify-between">
        <h4 className="text-[28px]">Bewerk</h4>
        
        <button onClick={() => setIsOpen(false)}> <svg
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg></button> 
      </div>

          <ul className="flex flex-col gap-4">
            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link href="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link href="/branches" onClick={() => setIsOpen(false)}>Branches</Link></li>
            <li><Link href="/join-us" onClick={() => setIsOpen(false)}>Job</Link></li>
            <li><Link href="/partner" onClick={() => setIsOpen(false)}>Partner Job</Link></li>
            <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>

          {/* Mobile Language Switcher */}
          {/* <div className="flex gap-2 pt-4 border-t border-white/20">
            <Link
              href={{ pathname: purePath || "/" }}
              locale="de"
              className={locale === "de" ? "text-[#2BA7FF]" : "text-white"}
            >
              DE
            </Link>
            <span>/</span>
            <Link
              href={{ pathname: purePath || "/" }}
              locale="en"
              className={locale === "en" ? "text-[#2BA7FF]" : "text-white"}
            >
              EN
            </Link>
          </div> */}
          <div className="flex gap-2 pt-4 border-t border-white/20">
            <Link
              href='/'
              locale="de"
              className={locale === "de" ? "text-[#2BA7FF]" : "text-white"}
            >
              DE
            </Link>
            <span>/</span>
            <Link
              href='/'
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
