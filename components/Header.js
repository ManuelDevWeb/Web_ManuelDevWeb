import Image from "next/image";
import Link from "next/link";

// Components
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute w-full z-30 flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* Logo */}
          <Link href={"/"}>
            <h2 className="text-3xl font-bold">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
