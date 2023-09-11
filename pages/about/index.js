import { useState } from "react";

// Motion
import { motion } from "framer-motion";

// Variants
import { fadeIn } from "../../variants";

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
          <FaHtml5 key={1} />,
          <FaCss3 key={2} />,
          <FaJs key={3} />,
          <FaReact key={4} />,
          <SiNextdotjs key={5} />,
          <SiFramer key={6} />,
          <FaWordpress key={7} />,
        ],
      },
      {
        title: "Frontend",
        icons: [
          <FaFigma key={1} />,
          <SiAdobexd key={2} />,
          <SiAdobephotoshop key={3} />,
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
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
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
        <div className="flex-1 flex flex-col justify-center">text</div>
        <div className="flex flex-col w-full h-[480px] xl:max-w-[48%]">
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
          <div>
            {aboutData[index].info.map((item, i) => {
              return (
                <div key={i}>
                  {/* Title */}
                  <div>{item.title}</div>
                  {/* Stage */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
