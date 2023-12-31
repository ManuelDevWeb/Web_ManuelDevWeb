import Link from "next/link";

// Icons
import { RiGithubFill, RiInstagramLine, RiLinkedinFill } from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://github.com/ManuelDevWeb"}
        target="_blank"
        className="hover:text-yellow-500/100 transition-all duration-300"
      >
        <RiGithubFill fontSize={25} />
      </Link>
      <Link
        href={"https://www.instagram.com/manuelvalencial17/"}
        target="_blank"
        className="hover:text-yellow-500/100 transition-all duration-300"
      >
        <RiInstagramLine fontSize={25} />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/manueldevweb/"}
        target="_blank"
        className="hover:text-yellow-500/100 transition-all duration-300"
      >
        <RiLinkedinFill fontSize={25} />
      </Link>
    </div>
  );
};

export default Socials;
