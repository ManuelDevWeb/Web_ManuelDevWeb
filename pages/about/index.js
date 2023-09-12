import { useState } from "react";

// Motion
import { motion } from "framer-motion";

// Variants
import { fadeIn } from "../../variants";

// Counter
import CountUp from "react-countup";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

// data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Backend",
        icons: [
          <SiNextdotjs key={5} />,
          <SiFramer key={6} />,
          <FaWordpress key={7} />,
        ],
      },
      {
        title: "Frontend",
        icons: [
          <FaFigma key={1} />,
          <FaHtml5 key={1} />,
          <FaCss3 key={2} />,
          <FaJs key={3} />,
          <FaReact key={4} />,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Backend Developer - Mango Soft",
        stage: "2022 - 2023",
      },
      {
        title: "Frontend Developer - CBW Agency",
        stage: "2021 - 2022",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title:
          "Ingenieria Informatica - Politecnico Colombiano Jaime Isaza Cadavid",
        stage: "2022",
      },
      {
        title: "Certificado Carrera de Desarrollo Web con JavaScript - Platzi",
        stage: "2022",
      },
      {
        title: "Certificado Frontend con React - Platzi",
        stage: "2022",
      },
      {
        title: "Certificado Backend con Node.js - Platzi",
        stage: "2023",
      },
    ],
  },
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="bg-primary/80 xl:bg-primary/60 h-full py-32 text-center xl:text-left">
      <Circles />
      {/* Avatar */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row">
        {/* Text */}
        <div className="flex-1 flex flex-col">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-yellow-500/100">stories</span>{" "}
            birth magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            4 years ago, I began as a developer. Since then, I have studied
            multiple technologies, done a lot of projects applying best
            practices and providing a good user experience.
          </motion.p>
          {/* Counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl mx-auto xl:max-w-none xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* Experience */}
              <div className="relative w-1/3 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-yellow-500/100 mb-2">
                  <CountUp start={0} end={3} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of Experience
                </div>
              </div>
              {/* Projects */}
              <div className="relative w-1/3">
                <div className="text-2xl xl:text-4xl font-extrabold text-yellow-500/100 mb-2">
                  <CountUp start={0} end={100} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finishied projects
                </div>
              </div>
              {/* Clients */}
              <div className="relative w-1/3 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-yellow-500/100 mb-2">
                  <CountUp start={0} end={20} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Technologies & Tools
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full h-[450px] xl:max-w-[48%]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, i) => {
              return (
                <div
                  key={i}
                  className={`${
                    index === i &&
                    "text-yellow-500/100 after:w-[100%] after:bg-yellow-500/100 after:transition-all after:duration-500"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(i)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/70"
                >
                  {/* Title */}
                  <div className="font-light my-3 md:my-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  {/* Stage */}
                  <div>{item.stage}</div>
                  {/* Icons */}
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, i) => {
                      return (
                        <div key={i} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
