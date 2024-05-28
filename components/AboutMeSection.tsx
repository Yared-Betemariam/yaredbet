const AboutMeSection = () => {
  return (
    <section className="wrapper flex flex-col" id="about">
      <div className="flex flex-col py-20 items-center justify-center gap-6">
        <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
        <div className="bg-gray-900/20 h-[1px] max-w-[40rem] w-full" />
        <div className="flex flex-col indent-8 gap-4 text-base md:text-lg text-center max-w-3xl">
          <p>
            Hello! My name is Yared and I enjoy creating things that live on the
            internet. My interest in web development started back in 2012 when I
            decided to try editing custom Tumblr themes — turns out hacking
            together a custom reblog button taught me a lot about HTML & CSS!
          </p>

          <p>
            Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </p>

          <p>
            I also recently launched a course that covers everything you need to
            build a web app with the Spotify API using Node & React.
          </p>
        </div>
      </div>
    </section>
  );
};
export default AboutMeSection;
