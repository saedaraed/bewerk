"use client"
// import { useTranslations } from "next-intl";
// import { Link } from "@/i18n/routing";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
// import ServicesSection from "@/components/ServicesSection";
// import BranchesSection from "@/components/BranchesSection";
import Contact from "@/components/Contact";
import AppSection from "@/components/AppSection";
import TestimonialsSection from "@/components/TestimonialsSections";
import HeroSectionB from "@/components/HeroSectionB";
import { useState } from "react";
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

const HomePage = () =>{
  const [active, setActive] = useState<"B" | "C">("B");
   return (
    <>
     {/* <div>
      <h1>{t("about")}</h1>
      <Link href="/contact">{t("contact")}</Link>
    </div> */}
    {/* <HeroSectionB/> */}
      {active === "B" ? (
        <HeroSection onSwitch={() => setActive("C")} />
      ) : (
        <HeroSectionB />
      )}
    {/* <HeroSection/> */}
    <AboutSection/>
    {/* <ServicesSection/> */}
    <AppSection/>
    {/* <BranchesSection/> */}
    <TestimonialsSection/>
    <Contact/>
    </>
   
  ); 
}

export default HomePage;