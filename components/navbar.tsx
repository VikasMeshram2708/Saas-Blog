import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Navbar() {
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
  ];
  return (
    <header className="w-full border-b shadow p-5">
      <nav className="container mx-auto flex items-center justify-between text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold">
      <Link href="/" className="text-lg md:text-xl lg:text-2xl xl:text-4xl group">
        Vikas <span className="group-hover:text-orange-500 transition duration-500">Blogs</span>
      </Link>
        <div className="flex items-center gap-5 text-lg">
          {Array.isArray(socialLinks) &&
            socialLinks.map((link) => (
              <article
                className="flex items-center gap-2 hover:text-blue-600 hover:underline underline-offset-4 duration-500"
                key={link.label}
              >
                <h1>{link.icon}</h1>
                <Link href={link.href} target="_blank">
                  {link.label}
                </Link>
              </article>
            ))}
        </div>
      </nav>
    </header>
  );
}
