'use client';

// import { getTranslations } from "next-intl/server";

// import { useTranslations } from "next-intl";
// import { Link } from "@/i18n/routing";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import BranchesSection from "@/components/BranchesSection";
import Contact from "@/components/Contact";
import AppSection from "@/components/AppSection";
// const HomePage = async () => {
//   const t = await getTranslations("HomePage");

//   return (
//     <div>
//       <h1>{t("heroSection.title")}</h1>
//       {/* <Link href="/contact">{t("contact")}</Link> */}
//     </div>
//   );
// };

// export default HomePage;

const HomePage =()=>{
  // const t = useTranslations("HomePage")
   return (
    <>
     {/* <div>
      <h1>{t("about")}</h1>
      <Link href="/contact">{t("contact")}</Link>
    </div> */}
    <HeroSection/>
    <AboutSection/>
    <ServicesSection/>
    <AppSection/>
    <BranchesSection/>
    <Contact/>
    </>
   
  ); 
}

export default HomePage;