import { works } from "@/data/data";
import { IoIosArrowForward } from "react-icons/io";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const ProjectSheet = ({ project }: { project: (typeof works)[0] }) => {
  const images = project.photos.slice();
  images.shift();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div
          key={project.title}
          className="flex relative h-48 xxs:h-56 xs:h-64 sm:h-72 lg:h-[19rem] flex-col ring-[0.5px] ring-gray-900/45 min-w-[17rem] xxs:min-w-[20rem] xs:min-w-[24rem] w-full sm:min-w-[28rem] md:min-w-[23rem] lg:min-w-[28rem] gap-4 rounded-[1rem] justify-end p-4 group/probox drop-shadow-md"
        >
          {/* <div className="relative h-56"> */}
          <Image
            src={project.photos[0]}
            alt={project.title}
            fill
            className="object-center object-cover rounded-[1rem] shadow-md"
          />
          <div className="flex items-center justify-between p-2.5 md:p-3.5 z-10 bg-gray-50 rounded-2xl shadow-md absolute -bottom-6 md:-bottom-8 mx-8 group/box gap-2 pr-6 hover:pr-4 duration-300 transition-all inset-x-0 group-hover/probox:pr-4">
            <div className="flex items-center gap-4 px-4">
              <span className="text-base md:text-lg font-bold">
                {project.title}
              </span>
            </div>
            <IoIosArrowForward
              size={18}
              className="group-hover/box:scale-110 transition-all duration-300"
            />
          </div>
        </div>
      </SheetTrigger>
      <SheetContent
        side={"bottom"}
        className="h-[90vh] max-w-[46rem] mx-auto rounded-t-xl py-14 md:py-12 "
      >
        <Carousel className="mx-4 sm:mx-8 md:mx-12 ring-1 ring-gray-900/30 shadow-md">
          <CarouselContent className="">
            {images.map((item) => (
              <CarouselItem
                className="relative h-[25vh] xxs:h-[28vh] xs:h-[38vh] sm:h-[47vh] md:h-[50vh]"
                key={item}
              >
                <Image
                  src={item}
                  alt="project photos"
                  fill
                  className="object-center object-cover "
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <SheetHeader className="my-10 mx-4 md:mx-10">
          <SheetTitle className="text-2xl font-bold text-start">
            {project.title}
          </SheetTitle>
          <SheetDescription className="text-base text-start">
            {project.desc}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
export default ProjectSheet;
