import Image from "next/image";

const Logo = () => {
  return (
    <a href="/">
      <Image
        src={"/logo.png"}
        alt="logo"
        className="w-10 md:w-14"
        width={1080}
        height={1080}
      />
    </a>
  );
};
export default Logo;
