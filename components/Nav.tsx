"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

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
    <nav className="flex items-center justify-between w-full max-w-[27rem] md:max-w-[31rem] h-12 md:h-16 px-8 md:px-10 rounded-full border border-gray-900/25 z-50 shadow backdrop-blur-md bg-white/75 fixed mx-auto inset-x-0 top-4">
      {navLinks.map((item) => (
        <a
          href={item.href}
          onClick={() => setPathname(item.href)}
          key={item.name}
          className={cn(
            pathname === item.href
              ? "text-primary/90 scale-110"
              : "text-gray-900/90 opacity-80",
            "transition-all duration-300 text-[15px] md:text-[17px]"
          )}
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
};
export default Nav;
