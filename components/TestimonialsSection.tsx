import Image from "next/image";
import { FaTelegram } from "react-icons/fa";

/* eslint-disable react/no-unescaped-entities */
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Daniel G.",
      where: <FaTelegram />,
      role: "Thumbnail designer",
      img: "/testimonials/dani.jpg",
      star: 5,
      feedback:
        "The website looks fancy, the slide show for the thumbnails, the font, bg are best and the time was also great cuz you finished the website in just 2 days",
    },
    {
      name: "BÂŽÎ_DESIGNS.",
      where: <FaTelegram />,
      role: "Graphics design agency",
      img: "/testimonials/bazi.jpg",
      star: 5,
      feedback: "Very professional and simple website, just like we wanted!",
    },
  ];
  return (
    <section id="testimonials" className="wrapper flex flex-col">
      <div className="flex flex-col py-20 gap-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mx-auto">
          Testimonials
        </h2>
        <p className="mx-auto text-base md:text-lg opacity-80 mb-12">
          Here are some of my past clients
        </p>
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-20 mx-auto">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="flex flex-col p-6 px-3 w-full max-w-[19.5rem] md:max-w-[22rem] gap-4 rounded-3xl"
            >
              <div className="relative px-4 py-2">
                <span className="text-5xl md:text-6xl font-bold absolute -top-6 -left-6 opacity-80">
                  "
                </span>
                <span className="text-base">{item.feedback}</span>
                <span className="text-5xl md:text-6xl font-bold absolute -bottom-6 -right-6 opacity-80">
                  "
                </span>
              </div>
              <div className="h-[.77px] bg-gray-900/15 rounded-full mx-4" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 px-4">
                  <div className="relative w-12 h-12">
                    {item.img ? (
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        className="object-center rounded-full"
                      />
                    ) : (
                      <div className="bg-red-700 rounded-full absolute inset-0 shadow-md"></div>
                    )}
                  </div>
                  <div className="flex flex-col text-xs">
                    <span className="text-base font-semibold">{item.name}</span>
                    <span>{item.role}</span>
                  </div>
                </div>
                <div className="text-2xl">{item.where}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TestimonialsSection;
