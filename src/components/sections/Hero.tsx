"use client";

import { useState, useEffect, useCallback } from "react"; // Importing hooks from React for state management and side effects
import { motion, useReducedMotion } from "framer-motion"; // Importing motion and useReducedMotion from framer-motion for animations
import Link from "next/link"; // Importing Link from next/link for client-side navigation
import Image from "next/image"; // Importing Image from next/image for optimized image rendering

export default function Hero() {
  // State for mouse position to control dynamic gradients
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  // Memoize the handler to prevent unnecessary re-renders
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      const { clientX, clientY } = e;
      setMousePosition({
        x: clientX / window.innerWidth,
        y: clientY / window.innerHeight,
      });
    },
    [prefersReducedMotion]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-start">
      {/* Animated background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark-blue via-brand-dark-blue to-[#120726] -z-50">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,113,74,0.15),transparent_70%)] animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,56,100,0.2),transparent_50%)] animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(123,90,255,0.15),transparent_50%)] animate-pulse-slower"></div>
        </div>
      </div>

      {/* Dynamic mouse-following gradient */}
      <motion.div
        className="absolute inset-0 opacity-40 -z-40"
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
            rgba(255,158,100,0.5) 0%, 
            rgba(255,56,100,0.3) 30%, 
            rgba(123,90,255,0.15) 70%, 
            rgba(0,0,0,0) 100%)`,
        }}
        transition={{ type: "tween", duration: 0.2 }}
      />

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center mt-24 lg:mt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-6xl lg:text-7xl font-mono mb-4">
            <span className="text-neon-orange font-semibold bg-clip-text text-transparent bg-gradient-to-r from-sunset-pink via-sunset-orange to-neon-pink">
              innervate
            </span>
            <span className="text-white font-light">.agency</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 mt-8 max-w-3xl mx-auto leading-relaxed">
            Blending Idaho&apos;s breathtaking landscapes with cutting-edge
            digital innovation to create a unique
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sunset-pink to-sunset-orange">
              {" "}
              naturewave{" "}
            </span>
            aesthetic.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap gap-6 justify-center"
        >
          <Link
            href="/work"
            className="px-10 py-4 rounded-lg bg-gradient-to-r from-sunset-pink to-sunset-orange text-white font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sunset-orange/20"
          >
            View our work
          </Link>
          <Link
            href="/contact"
            className="px-10 py-4 rounded-lg bg-opacity-10 bg-white border border-white/20 text-white font-medium hover:bg-opacity-20 transition-all duration-300 hover:scale-105 hover:border-sunset-orange/30 hover:shadow-lg hover:shadow-sunset-orange/10"
          >
            Start a project
          </Link>
        </motion.div>
      </div>

      {/* Naturewave landscape */}
      <div className="absolute bottom-0 w-full h-[70vh] overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 z-20"></div>

        {/* Landscape image */}
        <div className="absolute inset-0 z-10">
          <Image
            src="/images/innervate.agency-naturewavehero-homepage.png"
            alt="Naturewave Landscape"
            fill
            className="object-cover object-center scale-110"
            priority
            sizes="100vw"
            quality={100}
          />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 perspective-element z-30">
          {/* Grid pattern */}
          <div className="retro-grid opacity-40" />

          {/* Glow line */}
          <div
            className="absolute left-0 right-0 h-px bottom-[40%] animate-pulse"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,113,74,0.8) 50%, transparent 100%)",
              boxShadow:
                "0 0 20px rgba(255,113,74,0.6), 0 0 40px rgba(255,113,74,0.4)",
            }}
          />
        </div>

        {/* Enhanced sun */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-[5%] left-1/2 transform -translate-x-1/2 w-96 h-96 rounded-full z-30 animate-pulse-slow"
          style={{
            background:
              "radial-gradient(circle, rgba(255,113,74,1) 0%, rgba(255,56,100,1) 100%)",
            boxShadow: `
              0 0 150px 75px rgba(255,56,100,0.7),
              0 0 300px 150px rgba(255,113,74,0.5),
              0 0 450px 225px rgba(255,56,100,0.3)
            `,
            filter: "blur(12px)",
          }}
        />
      </div>
    </section>
  );
}
