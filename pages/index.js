import Image from "next/image";

// Components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// Motion
import { motion } from "framer-motion";

// Variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/80 xl:bg-primary/60 h-full">
      {/* Text */}
      <div className="w-full h-full ">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* Title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Transforming Ideas <br /> Into{" "}
            <span className="text-yellow-500/100">Digital Reality</span>{" "}
          </motion.h1>
          {/* Subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut
            sodales purus. Maecenas eu est semper, pharetra tellus convallis,
            pretium elit.
          </motion.p>
          {/* Button */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
          {/* Image */}
          <div className="w-[1200px] h-full absolute bottom-0 right-0">
            {/* Particles */}
            <ParticlesContainer />
            {/* Avatar */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              className="w-full h-full max-w-[737px] max-h-[678px] absolute xl:bottom-0 xl:right-[5%]"
            >
              <Avatar />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
