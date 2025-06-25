import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "de"],
  defaultLocale: "de",
    localeDetection: true,
  localePrefix: "always",
   pathnames: {
    "/": {
    en: "/",
    de: "/",
  },

  // "/contact": {
  //   en: "/contact-me",
  //   de: "/kontaktiere-mich",
  // },
   "/contact": {
    en: "/contact",
    de: "/contact",
  },
  "/services": {
    en: "/services",
    de: "/services",
  },
  "/branches": {
    en: "/branches",
    de: "/branches",
  },
  "/partner": {
    en: "/partner",
    de: "/partner",
  },
  "/join-us": {
    en: "/join-us",
    de: "/join-us",
  },
   "/terms": {
    en: "/terms",
    de: "/terms",
  },
   "/privacy": {
    en: "/privacy",
    de: "/privacy",
  },
} 
});


export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);