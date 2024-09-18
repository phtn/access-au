import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      alt="access-logo"
      src="/svg/access_logo.svg"
      width={0}
      height={0}
      unoptimized
      priority
      className="h-8 w-auto animate-enter text-gray-900 delay-300"
    />
  );
};
