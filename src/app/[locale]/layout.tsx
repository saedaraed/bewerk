import type { Metadata } from "next";
import { Geist, Cairo} from "next/font/google";
import "./globals.css";
import { Locale, routing } from "../../i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import ClientWrapper from "@/components/ClientWrapper";
// import Navbar from "../../components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bewerk",
  description: "A company that provides transportation services",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages({locale});
  return (
    <html lang={locale} >
      <body
        className={`${geistSans.variable} ${cairo.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
            <ClientWrapper>
            {children}
             <Footer /> 
          </ClientWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}