"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onFinish }: { onFinish: () => void }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() =>  setStage(1), 1000),  
      setTimeout(() => setStage(2), 2000), 
      setTimeout(() => setStage(3), 3500),  
      setTimeout(() => setStage(4), 4800),  
      setTimeout(() => setStage(5), 6100),   
      setTimeout(() => setStage(6), 6800),  
      setTimeout(() => onFinish(), 7200),    
    ];
    return () => timers.forEach(clearTimeout);
  }, [onFinish]);

  const containerVariants = {
    initial: {
      scale: 0.1,
      opacity: 0,
      rotate: 0,
      top: "50%",
      left: "50%",
      x: "-50%",
      y: "-50%",
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
    //   transition: { type: "spring", stiffness: 80, damping: 20 },
    },
    rotate: {
      rotate: 360,
    //   transition: { duration: 1.2 },
    },
    vanish: {
      scale: 0,
      opacity: 0,
    //   transition: { duration: 1 },
    },
  };

  const initialPositions = [
    { x: -50, y: -50 },
    { x: 50, y: -50 }, 
    { x: -50, y: 50 },  
    { x: 50, y: 50 },
  ];

  const swappedPositions1 = [
    { x: 50, y: -50 }, 
    { x: 50, y: 50 },  
    { x: -50, y: -50 }, 
    { x: -50, y: 50 },   
  ];

 const swappedPositions2 = [
    { x: -50, y: -50 },
    { x: 50, y: -50 }, 
    { x: -50, y: 50 },  
    { x: 50, y: 50 },
];
const icons = [
  { type: "image", src: "/cleaning1.svg" },
  { type: "image", src: "/cleaning2.svg" },
  { type: "image", src: "/cleaning3.svg" },
  { type: "text", label: "Be" },
];
 const getPosition = (i: number) => {
    if (stage >= 4) return swappedPositions2[i]; 
    if (stage === 3) return swappedPositions1[i];
    if (stage === 2) return initialPositions[i]; 
    return { x: 0, y: 0 }; 
  };

  const getRotation = () => {
   if (stage === 3 || stage === 4) return 180; 
  if (stage === 5) return 360; 
  return 0;
  };
  return (
    <div className="fixed inset-0 z-[9999]">
      <AnimatePresence>
        <motion.div className="relative w-full h-full">

          <motion.div
            variants={containerVariants}
            initial="initial"
            animate={
              stage === 0
                ? "visible"
                : stage === 5
                ? "rotate"
                : stage === 6
                ? "vanish"
                : false
            }
             transition={
    stage === 0
      ? { type: "spring", stiffness: 80, damping: 20 }
      : stage === 5
      ? { duration: 1.2 }
      : stage === 6
      ? { duration: 1 }
      : undefined
  }
            className="absolute w-[200px] h-[200px]"
          >
            {icons.map((icon, i) => {
              const pos = getPosition(i);
              const rotate = getRotation();

              return (
                <motion.div
                  key={i}
                  animate={{
                    x: pos.x,
                    y: pos.y,
                    rotate: rotate,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 12,
                    duration: 0.8,
                  }}
                  className="absolute w-[95px] h-[95px] bg-[#100F0F] rounded-[24px] flex items-center justify-center text-white font-bold text-xl p-4"
                >
                   {icon.type === "text" ? (
        <span className="text-white text-xl font-bold">{icon.label}</span>
      ) : (
        <img src={icon.src} alt="card image" className="w-full h-full object-cover" />
      )}
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
