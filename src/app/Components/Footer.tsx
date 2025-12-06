import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full mt-20 border-t border-gray-800/50 bg-gradient-to-b from-transparent to-black/30">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Left Side - Designer Info */}
          <div className="flex items-center gap-4 group">
            <div className="relative">
              <div className="absolute inset-0 bg-violet-600/20 rounded-lg blur-md group-hover:bg-violet-600/30 transition-all duration-300"></div>
              <Image
                src="/images/logo.webp"
                alt="Gregory Garcia"
                height={48}
                width={48}
                className="relative rounded-lg transition-all duration-300"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-gray-500 text-xs uppercase tracking-wider">Designed & Developed by</p>
              <strong className="text-transparent bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-xl font-black">
                GREGORY GARCIA
              </strong>
            </div>
          </div>

          {/* Right Side - Tech Stack */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <span className="text-gray-400 text-sm font-medium">Built with modern technologies</span>
            <div className="flex items-center gap-4 bg-gray-800/30 px-6 py-3 rounded-xl border border-gray-700/50 hover:border-violet-500/50 transition-all duration-300 group">
              <div className="relative">
                <Image
                  alt="Next.js"
                  width={32}
                  height={32}
                  src="/images/nextjs.svg"
                  className="invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="w-px h-6 bg-gray-700"></div>
              <div className="relative">
                <Image
                  alt="Tailwind CSS"
                  width={28}
                  height={28}
                  src="/images/tailwind.svg"
                  className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-800/50">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Gregory Garcia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
