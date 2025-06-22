import React from "react";
// import Link from "next/link";

import { useLocale } from 'next-intl';
import { Link } from '../i18n/routing';
type AllowedPaths = "/contact" | "/services" | "/branches";

type ButtonProps = {
  name: string;
  href?: AllowedPaths;
  type?: "button" | "submit" | "reset";
  bgColor?: string;
  textColor?: string;
};

const Button: React.FC<ButtonProps> = ({ name, href, type = "button" , bgColor = "bg-white",
  textColor = "text-[#2BA7FF]"}) => {
    const locale = useLocale();

  const classes =
    `${bgColor} ${textColor} md:text-[20px] text-[16px] md:px-14 md:py-4 px-8 py-2 rounded-[40px] rounded-tr-none`;

  if (href) {
    return (
      <Link href={href} locale={locale} className={classes}>
        {name}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {name}
    </button>
  );
};

export default Button;
