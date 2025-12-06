import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full mt-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Side - Designer Info */}
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo.webp"
              alt="Gregory Garcia"
              height={40}
              width={40}
              className="rounded-lg"
            />
            <div className="flex flex-col border-l-2 border-violet-700 pl-4">
              <p className="text-gray-400 text-sm">Designed by</p>
              <strong className="text-violet-400 text-lg font-bold">GREGORY GARCIA</strong>
            </div>
          </div>

          {/* Right Side - Tech Stack */}
          <div className="flex items-center gap-3 text-gray-400 text-sm">
            <span>Built with:</span>
            <div className="flex items-center gap-3 bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
              <Image
                alt="Next.js"
                width={30}
                height={30}
                src="/images/nextjs.svg"
                className="opacity-80 hover:opacity-100 transition-opacity invert"
              />
              <Image
                alt="Tailwind CSS"
                width={24}
                height={24}
                src="/images/tailwind.svg"
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-6 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Gregory Garcia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
