export default function Footer() {
  return (
    <div className="w-full bg-gray-100 z-20">

    <div className="w-full grid grid-cols-2 p-2 text-gray-900 text-1xl items-center justify-between mx-auto my-0 sm:w-4/5">
      <div className="flex-col">
        <p>Designed by </p>
        <strong className="text-violet-900">GREGORY GARCIA</strong>.
      </div>
      <p className="flex items-center text-center ml-auto">
        Made with:
        <img
                className="bg-gray-100 mr-4 ml-4"
                alt={"NextJS"}
                width="50"
                height="50"
                src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"}
              />
        <img
                className="bg-gray-100"
                alt={"Tailwind"}
                width="40"
                height="40"
                src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"}
              />
      </p>
    </div>
    </div>
  );
}
