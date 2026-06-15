"use client";

import { motion } from "framer-motion";

const phrases = [
  "Yapay Zeka", "•", "Otonom Sistemler", "•", "Görüntü İşleme", "•", "Robotik", "•", "ROS 2", "•", "YOLOv8", "•"
];

export function Marquee() {
  return (
    <div className="relative w-full overflow-hidden bg-blue-600 text-white py-4 border-y border-blue-700 flex whitespace-nowrap flex-nowrap shadow-inner shadow-blue-900/20">
      <motion.div 
        className="flex flex-nowrap items-center gap-12 text-sm md:text-base font-semibold tracking-widest uppercase"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
      >
        {[...phrases, ...phrases, ...phrases, ...phrases].map((phrase, i) => (
          <span key={i} className={phrase === "•" ? "text-blue-300 opacity-50" : "drop-shadow-sm"}>{phrase}</span>
        ))}
      </motion.div>
    </div>
  );
}
