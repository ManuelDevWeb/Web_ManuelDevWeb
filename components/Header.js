import Image from "next/image";
import Link from "next/link";

// Motion
import { motion } from "framer-motion";

// Variants
import { fadeIn } from "../variants";

// Components
import Socials from "./Socials";

const Header = () => {
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
          <Socials />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
