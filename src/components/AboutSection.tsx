"use client";
import Image from "next/image";
import Button from "./Button";
import { useTranslations } from "next-intl";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import type { Variants } from "framer-motion";

const cardVariants: Variants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  hiddenTop: { opacity: 0, y: -100 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      delay: custom,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const innerText: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const AboutSection = () => {
     const t =  useTranslations("HomePage");
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="container w-[85%] mx-auto md:h-screen flex md:flex-row flex-col items-center md:mt-0 mt-30">
       <motion.div  
          variants={cardVariants}
        initial="hiddenLeft"
        animate={inView ? "visible" : "hiddenLeft"}
        custom={0.2} className="md:w-[25%] w-full bg-white md:h-[583px] h-[200px] flex md:flex-col flex-row rounded-[40px]  md:rounded-br-none md:rounded-tr-none md:rounded-bl-[40px] rounded-bl-none rounded-br-none  overflow-hidden">
        <div className="md:h-[50%] h-full">
          <Image
            src="/hero-image.jpg"
            alt="about-image"
            width={600}
            height={600}
            className="w-full h-full object-cover "
          />
        </div>
        <div className="md:h-[50%] h-full">
          <Image
            src="/hero-image.jpg"
            alt="about-image"
            width={600}
            height={600}
            className="w-full h-full object-cover "
          />
        </div>
      </motion.div>
      <motion.div   
        variants={cardVariants}
        initial="hiddenTop"
        animate={inView ? "visible" : "hiddenTop"}
        custom={0.2} className="md:w-[35%] w-full bg-[#2BA7FF] md:p-12 p-8 md:h-[724px] h-full md:rounded-[40px] rounded-tr-none rounded-none">
          <motion.h2 variants={innerText} initial="hidden" animate={inView ? "visible" : "hidden"} custom={0.5} className="font-bold md:text-[48px] text-[30px] md:mb-6 mb-4">{t('aboutSection.title')}</motion.h2>
        <motion.p variants={innerText} initial="hidden" animate={inView ? "visible" : "hidden"} custom={0.7}  className="md:text-[20px] text-[16px] md:leading-[40px] leading-[30px]">
        {t('aboutSection.paragraph1')}
        </motion.p>
        <motion.p variants={innerText} initial="hidden" animate={inView ? "visible" : "hidden"} custom={0.9} className="md:text-[20px] text-[16px] md:leading-[40px] leading-[30px] mb-8">
       {t('aboutSection.paragraph2')}
        </motion.p>
                <motion.div variants={innerText} initial="hidden" animate={inView ? "visible" : "hidden"} custom={1.1}>
<Button name= {t('aboutSection.button')} />  </motion.div>
      </motion.div>
      <motion.div  variants={cardVariants}
        initial="hiddenRight"
        animate={inView ? "visible" : "hiddenRight"}
        custom={0.3} className="md:w-[40%] w-full bg-white text-black p-12 md:h-[583px] h-full rounded-[40px] rounded-tl-none md:rounded-bl-none rounded-tr-none overflow-hidden">
          <motion.h4 variants={innerText} initial="hidden" animate={inView ? "visible" : "hidden"} custom={0.6} className="text-[20px] font-bold">
          {t("aboutSection.cardTitle")}
        </motion.h4>
        <motion.p variants={innerText} initial="hidden" animate={inView ? "visible" : "hidden"} custom={0.8} className="md:text-[20px] text-[16px] md:leading-[40px] leading-[30px]">
          {t("aboutSection.cardDescription")}
        </motion.p>
          <div className="flex flex-col md:gap-6 gap-4 mt-8">
          {["feature1", "feature2", "feature3", "feature4"].map((feature, i) => (
            <motion.div
              key={feature}
              variants={innerText}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={1 + i * 0.2}
              className="flex gap-4 items-center"
            >
              <div className="w-[36px] h-[36px] bg-[#2BA7FF] rounded-full flex items-center justify-center text-white text-xl">✓</div>
              <p className="md:text-[20px] text-[16px]">{t(`aboutSection.features.${feature}`)}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
export default AboutSection;
