import Link from "next/link";

// Icons
import { RiGithubLine, RiInstagramLine, RiLinkedinLine } from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://github.com/ManuelDevWeb"}
        target="_blank"
        className="hover:text-yellow-500/100 transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://www.instagram.com/manuelvalencial17/"}
        target="_blank"
        className="hover:text-yellow-500/100 transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/manueldevweb/"}
        target="_blank"
        className="hover:text-yellow-500/100 transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
    </div>
  );
};

export default Socials;
