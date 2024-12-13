// import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="h-screen w-full flex items-center">
      <div className="container mx-auto px-4">
        <article className="flex flex-col items-center text-center space-y-6">
          <h6 className="text-lg tracking-wider">Hello & Welcome</h6>
          <h1 className="text-5xl text-white font-extrabold leading-tight group">
            I&apos;m{" "}
            <span className="group-hover:text-orange-500 transition duration-500">
              Vikas
            </span>{" "}
            Meshram
          </h1>
          <SocialLinksContainer />
          {/* <p className="text-lg text-gray-300">
            Welcome to my blog! Here, I share insights and updates on the latest
            trends in technology, along with detailed posts about the projects
            I’m working on. Whether you're interested in web development,
            software solutions, or the tech industry's latest innovations,
            you'll find informative and engaging content to help you stay
            updated.
          </p> */}
          <button className="px-6 py-3 hover:text-black hover:bg-white rounded-full border-2 transition duration-500">
            Download Resume
          </button>
        </article>
      </div>
    </div>
  );
}

const socialLinks = [
  {
    label: "Github",
    href: "https://github.com/VikasMeshram2708",
    icon: <FaGithub />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vikas-meshram/",
    icon: <FaLinkedin />,
  },
  {
    label: "Twitter",
    href: "https://www.linkedin.com/in/vikas-meshram/",
    icon: <FaSquareXTwitter />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/shivaansh_vikas0p/",
    icon: <BsInstagram />,
  },
];
function SocialLinksContainer() {
  return (
    <div className="items-center gap-2">
      <div className="container mx-auto flex items-center gap-5">
        {Array.isArray(socialLinks) &&
          socialLinks.map((link) => (
            <article key={link.label} className="flex items-center gap-2">
              <p className="cursor-pointer">{link.icon}</p>
              {/* <Link href={link.href} className="capitalize text-white">
                {link.label}
              </Link> */}
            </article>
          ))}
      </div>
    </div>
  );
}
