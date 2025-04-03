import { motion } from "framer-motion";
import { 
  FaReact, FaVuejs, FaJs, FaHtml5, FaCss3Alt, 
  FaGithub, FaNodeJs 
} from "react-icons/fa";
import { 
  SiNextdotjs, SiTailwindcss, SiTypescript, 
  SiMongodb, SiPostgresql, SiPython 
} from "react-icons/si";

const Tech = () => {
  return (
    <div id="tech" className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32">
      
      {/* Animated Title */}
      <motion.h1
        className="text-4xl font-light text-white md:text-6xl cursor-pointer"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        Technologies
      </motion.h1>

      {/* Icons Container with Looping Animation */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-8 p-5 overflow-hidden"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        <FaReact className="text-[60px] text-sky-500 sm:text-[80px] md:text-[90px]" />
        <SiNextdotjs className="text-[60px] text-gray-300 sm:text-[80px] md:text-[90px]" />
        <FaVuejs className="text-[60px] text-green-500 sm:text-[80px] md:text-[90px]" />
        <SiTailwindcss className="text-[60px] text-blue-400 sm:text-[80px] md:text-[90px]" />
        <FaJs className="text-[60px] text-yellow-500 sm:text-[80px] md:text-[90px]" />
        <SiTypescript className="text-[60px] text-blue-600 sm:text-[80px] md:text-[90px]" />
        <FaHtml5 className="text-[60px] text-orange-500 sm:text-[80px] md:text-[90px]" />
        <FaCss3Alt className="text-[60px] text-blue-500 sm:text-[80px] md:text-[90px]" />
        <FaGithub className="text-[60px] text-gray-400 sm:text-[80px] md:text-[90px]" />
        <FaNodeJs className="text-[60px] text-green-600 sm:text-[80px] md:text-[90px]" />
        <SiMongodb className="text-[60px] text-green-500 sm:text-[80px] md:text-[90px]" />
        <SiPostgresql className="text-[60px] text-blue-600 sm:text-[80px] md:text-[90px]" />
        <SiPython className="text-[60px] text-yellow-400 sm:text-[80px] md:text-[90px]" />
      </motion.div>
      
    </div>
  );
};

export default Tech;
