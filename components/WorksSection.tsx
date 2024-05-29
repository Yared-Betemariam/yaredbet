/* eslint-disable react/no-unescaped-entities */
import { works } from "@/data/data";
import Image from "next/image";
import ProjectSheet from "./ProjectSheet";

const WorksSection = () => {
  return (
    <section id="works" className="wrapper flex flex-col">
      <div className="flex flex-col py-24 gap-4">
        <h2 className="text-4xl md:text-5xl font-bold mx-auto">
          My Past works
        </h2>
        <p className="mx-auto text-base md:text-lg opacity-80 mb-12">
          Some things that i've worked on
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-20">
          {works.map((item) => (
            <ProjectSheet key={item.title} project={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default WorksSection;
