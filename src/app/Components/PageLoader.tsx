"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Floating particle component
const FloatingParticle = ({ delay, duration, size, x, y }: {
  delay: number;
  duration: number;
  size: number;
  x: number;
  y: number;
}) => (
  <motion.div
    className="absolute rounded-full bg-violet-500/30"
    style={{ width: size, height: size }}
    initial={{
      x,
      y,
      scale: 0,
      opacity: 0,
    }}
    animate={{
      scale: [0, 1, 0],
      opacity: [0, 0.8, 0],
      y: [y, y - 100, y - 200],
    }}
    transition={{
      duration,
      repeat: Infinity,
      delay,
      ease: "easeOut",
    }}
  />
);

// Text shimmer animation
const ShimmerText = ({ children }: { children: string }) => (
  <motion.span
    className="relative inline-block"
    animate={{
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    }}
    transition={{ duration: 3, repeat: Infinity }}
    style={{
      backgroundImage: "linear-gradient(90deg, #c4b5fd, #a78bfa, #8b5cf6, #a78bfa, #c4b5fd)",
      backgroundSize: "200% 100%",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    {children}
  </motion.span>
);

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Set dimensions after component mounts (client-side only)
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

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
    }, 100);

    // Complete loading
    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
      }, 400);
    }, 1800);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  // Generate particles
  const particles = dimensions.width > 0 ? [...Array(25)].map((_, i) => ({
    id: i,
    delay: Math.random() * 2,
    duration: 2 + Math.random() * 2,
    size: 2 + Math.random() * 4,
    x: Math.random() * dimensions.width,
    y: dimensions.height * 0.5 + Math.random() * dimensions.height * 0.5,
  })) : [];

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
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 70% 70%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 30% 70%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
              <FloatingParticle key={particle.id} {...particle} />
            ))}
          </div>

          {/* Main content */}
          <div className="text-center relative z-10">
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotateY: -180 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              className="relative mb-8 flex justify-center"
            >
              <div className="relative w-36 h-36">
                {/* Outer rotating ring */}
                <motion.div
                  className="absolute inset-0 w-full h-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
                        <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
                        <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray="70 200"
                    />
                  </svg>
                </motion.div>

                {/* Second rotating ring (opposite direction) */}
                <motion.div
                  className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)]"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="rgba(139, 92, 246, 0.3)"
                      strokeWidth="1"
                      strokeDasharray="10 20"
                    />
                  </svg>
                </motion.div>

                {/* Pulsing glow */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-violet-600/20 to-purple-600/20 blur-xl" />
                </motion.div>

                {/* Logo with enhanced glow and pulse */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <motion.div
                      className="absolute inset-0 bg-violet-600/40 rounded-xl blur-2xl"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.4, 0.7, 0.4],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 2, -2, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative z-10"
                    >
                      <Image
                        src="/images/logo.webp"
                        alt="Gregory Garcia"
                        width={80}
                        height={80}
                        className="w-20 h-20 object-contain rounded-lg shadow-lg shadow-violet-900/50"
                        priority
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Loading text with animations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold">
                <ShimmerText>Gregory Garcia</ShimmerText>
              </h2>

              {/* Animated loading dots */}
              <motion.div className="flex items-center justify-center gap-1">
                <span className="text-violet-400 text-sm font-medium tracking-wider">
                  Loading Experience
                </span>
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="text-violet-400 text-sm"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  >
                    .
                  </motion.span>
                ))}
              </motion.div>

              {/* Enhanced progress bar */}
              <div className="w-72 mx-auto mt-6">
                <div className="relative h-1.5 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm">
                  {/* Glowing background */}
                  <motion.div
                    className="absolute inset-0 bg-violet-500/20 blur-sm"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  {/* Progress fill */}
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-violet-600 via-purple-500 to-violet-600 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${Math.min(progress, 100)}%` }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  />
                  {/* Shimmer effect on progress */}
                  <motion.div
                    className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: [-80, 320] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  />
                </div>

                {/* Progress percentage with pulse */}
                <motion.div
                  className="flex justify-between items-center mt-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="text-gray-500 text-xs">Preparing portfolio</span>
                  <motion.span
                    className="text-violet-400 text-sm font-semibold"
                    animate={progress === 100 ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {Math.round(Math.min(progress, 100))}%
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
