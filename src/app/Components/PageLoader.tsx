"use client";
import { useEffect, useState } from "react";
import { markPageLoaderDone } from "../utils/pageLoader";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Logo frame: same 45deg cut corners as the site's cards and buttons
const FRAME = 112;
const CUT = 16;
const framePath = `M${CUT} 0.5 H${FRAME - 0.5} V${FRAME - CUT} L${FRAME - CUT} ${FRAME - 0.5} H0.5 V${CUT} Z`;

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress with easing
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Ease out the progress for more natural feel
        const remaining = 100 - prev;
        const increment = Math.max(remaining * 0.1, 1);
        return Math.min(prev + increment, 100);
      });
    }, 50);

    // Complete loading
    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        markPageLoaderDone();
      }, 250);
    }, 700);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(10px)",
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
        >
          {/* Soft violet glow behind the logo */}
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(139,92,246,0.12)_0%,transparent_45%)]"
          />

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Logo in an angled frame whose outline traces in with the progress.
                No entrance fade, so the server-rendered HTML shows the loader before JS runs. */}
            <div className="relative mb-8" style={{ width: FRAME, height: FRAME }}>
              <svg
                aria-hidden
                className="absolute inset-0 h-full w-full overflow-visible"
                viewBox={`0 0 ${FRAME} ${FRAME}`}
              >
                <path d={framePath} fill="rgba(17, 24, 39, 0.75)" stroke="rgba(55, 65, 81, 1)" strokeWidth={1} />
                <motion.path
                  d={framePath}
                  fill="none"
                  stroke="#a78bfa"
                  strokeWidth={1.5}
                  pathLength={100}
                  strokeDasharray="100 100"
                  initial={{ strokeDashoffset: 100 }}
                  animate={{ strokeDashoffset: 100 - Math.min(progress, 100) }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  style={{ filter: "drop-shadow(0 0 6px rgba(139, 92, 246, 0.7))" }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/logo.webp"
                  alt="Gregory Garcia"
                  width={64}
                  height={64}
                  className="h-16 w-16 object-contain"
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-3xl font-bold tracking-tight text-white" aria-hidden="true">
                Gregory Garcia
              </p>

              {/* Terminal-style status, same caret and cursor as the buttons */}
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-gray-400" role="status">
                <span aria-hidden className="text-violet-400">&gt;</span> Loading experience
                <span aria-hidden className="animate-blink">_</span>
              </p>

              {/* Progress bar with cut corners */}
              <div className="mt-6 w-72">
                <div className="relative h-1.5 bg-gray-800 [clip-path:polygon(4px_0,100%_0,100%_calc(100%-4px),calc(100%-4px)_100%,0_100%,0_4px)]">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-violet-600 to-violet-400"
                    initial={{ width: "0%" }}
                    animate={{ width: `${Math.min(progress, 100)}%` }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  />
                </div>
                <div className="mt-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em]">
                  <span className="text-gray-500">Preparing portfolio</span>
                  <span className="tabular-nums text-violet-300">{Math.round(Math.min(progress, 100))}%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
