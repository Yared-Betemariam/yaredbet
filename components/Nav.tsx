"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import MenuSheet from "./MenuSheet";

const Nav = () => {
  const navLinks = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Testimonials",
      href: "#testimonials",
    },
    {
      name: "Contact",
      href: "#contact",
    },
    {
      name: "Portfolio",
      href: "#works",
    },
  ];
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(`#${window.location.href.split("#")[1]}`);
  }, []);
  return (
    <nav className="flex items-center justify-between w-full max-w-[3rem] sm:max-w-[27rem] md:max-w-[31rem] h-12 md:h-16 py-0 px-0 sm:px-8 md:px-10 rounded-full border border-gray-900/25 z-50 shadow backdrop-blur-md bg-white/75 fixed ml-auto  mr-8 sm:mx-auto inset-x-0 top-4">
      {navLinks.map((item) => (
        <a
          href={item.href}
          onClick={() => setPathname(item.href)}
          key={item.name}
          className={cn(
            pathname === item.href
              ? "text-primary/90 scale-110"
              : "text-gray-900/90 opacity-80",
            "transition-all hidden sm:block duration-300 text-[15px] md:text-[17px]"
          )}
        >
          {item.name}
        </a>
      ))}
      <MenuSheet />
    </nav>
  );
};
export default Nav;
