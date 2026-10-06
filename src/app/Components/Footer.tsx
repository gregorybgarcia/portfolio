import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-800/50 bg-gradient-to-b from-transparent to-black/30">
      <div className="max-w-7xl mx-auto px-4 pt-5 pb-8">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:mb-0 mb-4">
          {/* Left Side - Designer Info */}
          <div className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-violet-600/20 rounded-lg blur-md group-hover:bg-violet-600/30 transition-all duration-300"></div>
              <Image
                src="/images/logo.webp"
                alt="Gregory Garcia"
                height={36}
                width={36}
                className="relative rounded-lg transition-all duration-300"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-gray-500 text-xs uppercase tracking-wider">Designed & Developed by</p>
              <strong className="text-transparent bg-gradient-to-r from-violet-400 via-violet-300 to-fuchsia-400 bg-clip-text text-lg font-black">
                GREGORY GARCIA
              </strong>
            </div>
          </div>

          {/* Copyright, inline on wider screens */}
          <p className="hidden md:block text-gray-500 text-xs">
            © {new Date().getFullYear()} Gregory Garcia. All rights reserved.
          </p>

          {/* Right Side - Tech Stack */}
          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-sm font-medium">Built with modern technologies</span>
            <div className="cyber-card cyber-card-sm flex items-center gap-3 px-4 py-2">
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative hover:scale-110 transition-transform duration-300"
              >
                <Image
                  alt="Next.js"
                  width={24}
                  height={24}
                  src="/images/nextjs.svg"
                  className="invert opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </a>
              <div className="w-px h-6 bg-gray-500"></div>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative hover:scale-110 transition-transform duration-300"
              >
                <Image
                  alt="Tailwind CSS"
                  width={22}
                  height={22}
                  src="/images/tailwind.svg"
                  className="opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="md:hidden text-center pt-4 border-t border-gray-800/50">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Gregory Garcia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
