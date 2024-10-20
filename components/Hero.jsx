import profilePic from "../assets/assets/juanCuzcanoProfile.jpg";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: {x: -100, opacity:0},
  visible: {
    x:0,
    opacity: 1,
    transition: {duration: 0.5, delay: delay},
  },
});


const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap lg:flex-nowrap lg:items-center lg:justify-between">
        {/* Profile Picture Column */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="lg:p-8">
            <motion.img
              initial={{ x:100, opacity: 0}}
              animate={{ y:0, opacity:1}}
              transition={{duration:1, delay:1.2}}
              src={profilePic}
              alt="profilePic"
              className="max-w-xs h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Hero Content Column */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <motion.h1 variants={container(0)}
                      initial="hidden"
                      animate="visible"
           className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
            Juan Cuzcano
          </motion.h1>
          <motion.span variants={container(0.5)}
                      initial="hidden"
                      animate="visible"
           className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
            Information Technology Student
          </motion.span>
          <motion.p variants={container(1)}
                      initial="hidden"
                      animate="visible"
          className="my-2 max-w-xl py-6 font-light tracking-tigher">
            {HERO_CONTENT}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
