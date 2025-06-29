"use client";
import Image from "next/image";
import Button from "./Button";
import { useTranslations } from "next-intl";
import { motion ,easeInOut } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HeroSection = ({ onSwitch }: { onSwitch: () => void }) => {
  const t = useTranslations("HomePage");
  const fullTitle = t("heroSection.title");
  const words = fullTitle.split(" ");
  const firstPart = words.slice(0, -1).join(" ");
  const lastWord = words[words.length - 1];

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const fadeUpSmooth = {
    hidden: { opacity: 0, y: 60, scale: 0.85 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.1,
        ease: easeInOut ,
      },
    },
    exit: {
      opacity: 0,
      y: -60,
      scale: 0.85,
      transition: { duration: 0.6, ease: easeInOut },
    },
  };

 

  return (
    <section
      ref={ref}
      className="container w-[85%] mx-auto h-screen flex md:flex-row flex-col mt-20 gap-10 "
    >
      <motion.div
        className="md:w-1/2 w-full md:mt-10 mt-0"
        variants={fadeUpSmooth}
        initial="hidden"
        animate={inView ? "visible" : "exit"}
      >
        <h1 className="font-bold md:text-[48px] text-[30px] md:mb-6 mb-4">
          {firstPart}
          <span className="text-[#2BA7FF]"> {lastWord}</span>{" "}
        </h1>
        <motion.p
          className="md:text-[20px] text-[16px] leading-[40px] md:mb-12 mb-6"
          variants={fadeUpSmooth}
          initial="hidden"
          animate={inView ? "visible" : "exit"}
          transition={{ delay: 0.2 }}
        >
          {t("heroSection.description")}
        </motion.p>
        <motion.div
          variants={fadeUpSmooth}
          initial="hidden"
          animate={inView ? "visible" : "exit"}
          transition={{ delay: 0.4 }}
        >
          {" "}
          <Button name={t("heroSection.bookNow")} href="/contact" />
          <button   onClick={onSwitch}>Test</button>
        </motion.div>
      </motion.div>
      <motion.div className="md:w-1/2 w-full  md:h-[70%] h-[50%] md:mt-0 mt-6"     variants={fadeUpSmooth}
        initial="hidden"
        animate={inView ? "visible" : "exit"}
        transition={{ delay: 0.6 }}>
        <div className="w-full h-full rounded-[40px] rounded-tr-none overflow-hidden">
          <Image
            src="/hero-image.jpg"
            alt="hero-image"
            width={600}
            height={600}
            className="w-full h-full object-cover "
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
