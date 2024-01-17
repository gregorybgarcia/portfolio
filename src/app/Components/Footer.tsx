import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full bg-gray-100 z-20">
      <div className="w-full grid grid-cols-2 p-2 text-gray-900 text-1xl items-center justify-between mx-auto my-0 2xl:w-4/5">
        <div className="flex items-center">
          <Image
            src="/images/logo.webp"
            alt="Gregory Barros"
            height={40}
            width={40}
            className="max-h-10 max-w-10"
          />
          <div className="flex-col ml-2 border-l-2 pl-2 border-gray-300">
            <p>Designed by </p>
            <strong className="text-violet-900">GREGORY GARCIA</strong>.
          </div>
        </div>
        <p className="flex items-center text-center ml-auto">
          Made with:
          <Image
            className="bg-gray-100 mr-4 ml-4"
            alt={"NextJS"}
            width="70"
            height="70"
            src="/images/next.svg"
          />
          <Image
            className="bg-gray-100"
            alt={"Tailwind"}
            width="40"
            height="40"
            src="/images/tailwind.svg"
          />
        </p>
      </div>
    </div>
  );
}
