import { Mail } from "lucide-react";
import {
  FaArrowRight,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";
import { MdMail } from "react-icons/md";

/* eslint-disable react/no-unescaped-entities */
const ContactSection = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      link: "https://github.com/Yared-Betemariam",
    },
    {
      icon: <FaTwitter />,
      link: "https://twitter.com/thecodingray",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/yaredoray/",
    },
  ];
  return (
    <section
      id="contact"
      className="wrapper py-20 flex flex-col items-center justify-center gap-6 text-gray-800"
    >
      <div className="flex flex-col gap-3 items-center text-center justify-center max-w-md mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold">Get in touch</h2>
        <p className="opacity-80 text-base md:text-lg">
          Leave a message if you have any projects in mind, I'd be happy to
          help”
        </p>
      </div>
      <div className="flex items-center justify-between shadow p-4 px-6 md:p-6 md:px-8 rounded-full border-[1.3px] border-gray-900/15 bg-gradient-to-br text-white from-primary/70 to-primary/75 w-full max-w-md group/boxhs text-base md:text-lg">
        <div className="flex items-center gap-4">
          <Mail
            size={22}
            className="group-hover/boxhs:scale-125 transform duration-300 transition-all"
          />
          <span className="font-semibold drop-shadow-md">
            yared.bete@gmail.com
          </span>
        </div>
        <FaArrowRight className="group-hover/boxhs:translate-x-2 transform duration-300 transition-all" />
      </div>
      <div className="flex items-center gap-8">
        {socialLinks.map((item) => (
          <a
            href={item.link}
            target="_blank"
            key={item.link}
            className="text-3xl text-gray-800/70 hover:text-gray-800 hover:scale-110 transition-all duration-300"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </section>
  );
};
export default ContactSection;
