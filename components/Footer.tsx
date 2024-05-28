const Footer = () => {
  const date = new Date();
  return (
    <section className="wrapper py-8 text-center">
      <p className="opacity-70 hover:cursor-pointer hover:opacity-90 duration-200 transition-all text-base">
        &copy; {date.getFullYear()} Yared B.
      </p>
    </section>
  );
};
export default Footer;
