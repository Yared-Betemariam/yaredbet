import Link from "next/link";
import { Button } from "./ui/button";

/* eslint-disable react/no-unescaped-entities */
const HeroSection = () => {
  return (
    <section className="wrapper flex pt-10 sm:pt-20">
      <div className="flex flex-col py-14 gap-5 md:gap-6">
        <span className="font-mono bg-gray-50 p-2 md:p-3 px-3 md:px-6 shadow-md rounded border-primary/75 mr-auto border-[2px] border-t-[.6rem] md:border-t-[1rem] text-gray-900 transform rotate-[-4deg] animate-rotate drop-shadow-md text-base md:text-lg">
          hello, my name is
        </span>
        <div className="flex items-center">
          <h1 className="text-5xl md:text-7xl font-bold drop-shadow-md">
            Yared Betemariam
          </h1>
          <span className="bg-gray-900 animate-cursor w-[1.2px] md:w-[1.5px] h-[4rem] md:h-[5.8rem] duration-0"></span>
        </div>
        <p className="text-sm md:text-lg font-medium max-w-xl opacity-70">
          I'm a professional full-stack developer who specializes in creating
          great digital solutions. I specialize in both the front-end and
          back-end aspects of projects.
        </p>
        <a href={"#contact"} className="mr-auto">
          <Button
            size={"lg"}
            variant={"secondary"}
            className="ring-[1.5px] ring-primary/70 font-semibold text-primary/90 text-xl bg-gray-50 h-14 px-12 shadow-md hover:bg-primary/80 hover:text-gray-50 duration-300 transition-all rounded-full"
          >
            Let's work
          </Button>
        </a>
      </div>
    </section>
  );
};
export default HeroSection;
