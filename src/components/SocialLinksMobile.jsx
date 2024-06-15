import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinksMobile = () => {
  const links = [
    {
      id: 1,
      icon: <FaLinkedin size={30} />,
      href: "https://www.linkedin.com/in/mehdi-nassereddine-973b35225/",
    },
    {
      id: 2,
      icon: <FaGithub size={30} />,
      href: "https://github.com/nassro2001",
    },
    {
      id: 3,
      icon: <HiOutlineMail size={30} />,
      href: "mailto:nassromehdi128@gmail.com",
    },
    {
      id: 4,
      icon: <FaWhatsapp size={30} />,
      href: "https://wa.me/+2250777898977",
    },
  ];
  return (
    <div className="w-full bg-gradient-to-b from-gray-800 to-black lg:hidden">
      <div className="pt-20 sm:pt-30 pb-8 border-t-2 border-primary-light dark:border-secondary-dark">
        {/* Footer social links */}
        <div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
          <ul className="flex gap-4 sm:gap-8">
            {links.map(({ id, icon, href }) => (
              <a
                href={href}
                target="_blank"
                key={id}
                rel="noreferrer"
                className=" bg-gray-500 text-white p-4 cursor-pointer rounded-lg hover:bg-white hover:text-gray-500 shadow-sm duration-300"
              >
                <i className="text-xl sm:text-2xl md:text-3xl">{icon}</i>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SocialLinksMobile;
