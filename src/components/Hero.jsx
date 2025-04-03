import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="home" className="px-6 md:px-16 flex min-h-screen w-full items-center justify-center py-28">
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        
        {/* Animated Image (Only Interactive When Needed) */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}  // Start above
          animate={{ opacity: 1, y: 0 }}   // Move down
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}  // Floating animation
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="relative"
          >
            <img 
              src="/image.jpg" 
              alt="Profile Image" 
              className="w-[80px] md:w-[120px] lg:w-[160px] 
              rounded-full shadow-xl shadow-indigo-900 
              transition-all duration-300 hover:-translate-y-2 hover:scale-105 
              hover:shadow-2xl hover:shadow-indigo-600"
            />
          </motion.div>
        </motion.div>

        {/* Animated Text Content (Bottom to Top + Hover) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}  
          animate={{ opacity: 1, y: 0 }}   
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center text-white"
        >
          {/* Remove cursor-pointer from static text */}
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            whileHover={{ scale: 1.1, color: "#6366F1" }}
            className="text-4xl font-bold"
          >
            Paul Njeru
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            whileHover={{ scale: 1.08, color: "#EC4899" }}
            className="text-2xl mt-2"
          >
            Welcome to my Portfolio
          </motion.h2>

          <motion.h4 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            whileHover={{ scale: 1.08, color: "#22D3EE" }}
            className="text-lg text-gray-300 mt-1"
          >
            Software Developer
          </motion.h4>

          <motion.h4 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            whileHover={{ scale: 1.05, color: "#A3A3A3" }}
            className="text-lg text-gray-400 mt-4 max-w-lg mx-auto"
          >
            Passionate full-stack developer proficient in modern frontend frameworks like React, Next.js, and Vue.js. 
            Skilled in crafting intuitive user interfaces, seamless animations, and responsive designs. 
            Strong foundation in backend technologies, databases, and API integrations, ensuring smooth 
            and scalable web applications. Always exploring the latest in web development. ⚙
          </motion.h4>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
