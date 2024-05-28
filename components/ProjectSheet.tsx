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
          className="flex relative h-48 sm:h-64 md:h-80 flex-col ring-1 ring-gray-900/45 min-w-[20rem] sm:min-w-[22rem] md:min-w-[28rem] gap-4 rounded-[1.5rem] justify-end p-4 group/probox"
        >
          {/* <div className="relative h-56"> */}
          <Image
            src={project.photos[0]}
            alt={project.title}
            fill
            className="object-center object-cover rounded-[1.5rem] shadow-md"
          />
          <div className="flex items-center justify-between p-4 z-10 bg-gray-50 rounded-2xl shadow-md absolute -bottom-8 mx-8 group/box gap-2 pr-6 hover:pr-4 duration-300 transition-all inset-x-0 group-hover/probox:pr-4">
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
        className="h-[90vh] max-w-[44rem] mx-auto rounded-t-xl py-10"
      >
        <Carousel className="mx-14 md:mx-20 ring-1 ring-gray-900/30 shadow-md">
          <CarouselContent className="">
            {images.map((item) => (
              <CarouselItem className="relative h-[50vh]" key={item}>
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
