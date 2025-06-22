"use client";
import { Link, usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";
const Navbar = () => {
  const locale = useLocale();
  const pathname = usePathname();
  return (
    <div className=" relative  z-100 container w-[85%] mx-auto flex justify-between items-center py-6">
      <div className="logo">
        <h4 className="text-[28px]">Bewerk</h4>
      </div>

      {/* navigation */}
      <div className="md:block hidden">
        <ul className="flex gap-4 text-[16px] text-white/80 font-light">
          {/* <li><Link href="/">{t('navigation.home')}</Link></li> */}
          <Link href="/">Home</Link>
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
            <Link href="/">Job</Link>
          </li>
          <li>
            <Link href="/">Patner Job</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </div>

      {/* lang */}
      <div className="flex gap-1">
        <Link
          href={pathname}
          locale="de"
          className={locale === "de" ? "font-bold" : ""}
        >
          DE
        </Link>
        <span>/</span>
        <Link
          href={pathname}
          locale="en"
          className={locale === "en" ? "font-bold" : ""}
        >
          EN
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
