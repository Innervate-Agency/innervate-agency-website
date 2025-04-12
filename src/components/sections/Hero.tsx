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
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    },
    [prefersReducedMotion]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark-blue via-brand-dark to-transparent">
        <motion.div
          className="absolute inset-0 opacity-50"
          animate={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,113,74,0.15) 0%, transparent 50%)`,
          }}
          transition={{ type: "tween", duration: 0.2 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container-wide mx-auto px-6 pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-6xl lg:text-7xl font-mono mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset-pink via-sunset-orange to-neon-pink font-semibold">
              innervate
            </span>
            <span className="text-white font-light">.agency</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed">
            Blending Idaho&apos;s breathtaking landscapes with cutting-edge
            digital innovation to create a unique{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sunset-pink to-sunset-orange">
              naturewave
            </span>{" "}
            aesthetic.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link
              href="/work"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-sunset-pink to-sunset-orange text-white font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sunset-orange/20"
            >
              View our work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Start a project
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Landscape and grid */}
      <div className="absolute bottom-0 left-0 right-0 h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 z-20" />

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
          <div className="retro-grid opacity-30" />

          {/* Horizon line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute left-0 right-0 h-px bottom-[40%]"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,113,74,0.8) 50%, transparent 100%)",
              boxShadow:
                "0 0 20px rgba(255,113,74,0.6), 0 0 40px rgba(255,113,74,0.4)",
            }}
          />
        </div>

        {/* Sun */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-[10%] left-1/2 transform -translate-x-1/2 w-80 h-80 rounded-full z-10"
          style={{
            background:
              "radial-gradient(circle, rgba(255,113,74,1) 0%, rgba(255,56,100,0.8) 50%, transparent 100%)",
            boxShadow: `
              0 0 150px 50px rgba(255,56,100,0.5),
              0 0 300px 100px rgba(255,113,74,0.3)
            `,
            filter: "blur(8px)",
          }}
        />
      </div>
    </section>
  );
}
