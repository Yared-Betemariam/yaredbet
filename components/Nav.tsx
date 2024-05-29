"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import MenuSheet from "./MenuSheet";
import Logo from "./Logo";

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
    <header className="fixed top-4 w-full inset-x-0 pb-1 z-50 flex px-6">
      <nav className="flex items-center justify-between mx-auto w-full max-w-[64rem] h-12 md:h-16 pl-1 py-0 pr-1 sm:pr-8 md:pr-10 rounded-full border border-gray-900/15 backdrop-blur-md bg-white/55">
        <Logo />
        <div className="flex items-center gap-12">
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
        </div>
        <div className="relative sm:hidden h-10 w-10">
          <MenuSheet />
        </div>
      </nav>
    </header>
  );
};
export default Nav;
