import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Translations
import { useTranslation } from "react-i18next";

// Motion
import { motion } from "framer-motion";

// Variants
import { fadeIn } from "../variants";

// Icons
import { LuLanguages } from "react-icons/lu";

// Components
import Socials from "./Socials";

const Header = () => {
  const [translation, i18n] = useTranslation("global");
  const [language, setLanguage] = useState("en");

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);

    if (lang === "en") {
      setLanguage("es");
    } else {
      setLanguage("en");
    }
  };

  return (
    <header className="absolute w-full z-30 flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8"
        >
          {/* Logo */}
          <Link href={"/"}>
            <h2 className="text-xl md:text-3xl font-bold">
              Manuel <span className="font-light">Dev</span>{" "}
              <span className="text-yellow-500/100">.</span>{" "}
            </h2>
            {/* <Image
              src={"/logo.svg"}
              width={220}
              height={48}
              alt=""
              priority={true}
            /> */}
          </Link>
          {/* Socials */}
          <div className="flex gap-20">
            <Socials />
            <button
              onClick={() => changeLanguage(language)}
              className="text-lg mt-1 font-bold uppercase hover:text-yellow-500/100 transition-all duration-300 flex gap-2 items-center"
            >
              <LuLanguages fontSize={25} /> {language}
            </button>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
