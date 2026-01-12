import { motion } from "motion/react";
import { ChevronsRight } from "lucide-react";

function AlternateText({ clasesP, clasesH1, clasesH2, textH1, textH2 }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      viewport={{ once: true, amount: 0.5 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`${clasesP} relative  col-span-full w-fit h-fit  md:col-span-8 md:-translate-x-6 lg:translate-0 overflow-hidden`}
    >
      <h1 className={`${clasesH1} text-white text-4xl text-shadow-lg`}>
        {textH1}
      </h1>
      <h2
        className={`${clasesH2} text-white mt-5 -tracking-tight  text-shadow-md `}
      >
        {textH2}
      </h2>
    </motion.section>
  );
}

export default AlternateText;
