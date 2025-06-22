import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "de"],

  // Used when no locale matches
  defaultLocale: "de",
 pathnames: {
  "/contact": {
    en: "/contact-me",
    de: "/kontaktiere-mich",
  },
  "/services": {
    en: "/services",
    de: "/services",
  },
  "/branches": {
    en: "/branches",
    de: "/branches",
  },
}
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);