"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll(
    ref.current
      ? {
          target: ref,
          offset: ["start end", "end start"],
        }
      : undefined
  );

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Neon glow animation for title
  const titleVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
      },
    },
  };

  // Button animation
  const buttonVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 25px rgba(255, 80, 150, 0.6)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  // Circle animations
  const circleVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: (delay: number) => ({
      opacity: [0, 0.7, 0.5],
      scale: 1,
      transition: {
        opacity: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        },
        scale: {
          duration: 1,
          delay: delay,
        },
      },
    }),
  };

  return (
    <section
      ref={ref}
      className="relative w-full py-40 overflow-hidden"
      id="cta"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark-blue/95 via-black/95 to-brand-dark-blue/95 z-0" />

      {/* Moving grid effect */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <motion.rect
            width="100%"
            height="100%"
            fill="url(#grid)"
            animate={{
              y: [0, 40],
              x: [0, -40],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </svg>
      </div>

      {/* Animated circles */}
      <motion.div
        className="absolute left-[10%] top-[20%] w-64 h-64 rounded-full bg-gradient-to-r from-neon-blue/10 to-neon-purple/30 blur-3xl"
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
        variants={circleVariants}
        custom={0.1}
      />
      <motion.div
        className="absolute right-[10%] bottom-[20%] w-80 h-80 rounded-full bg-gradient-to-r from-sunset-orange/20 to-sunset-pink/30 blur-3xl"
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
        variants={circleVariants}
        custom={0.3}
      />

      {/* Content */}
      <motion.div className="container-wide relative z-10" style={{ y, scale }}>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={titleVariants}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="block mb-4">Ready to elevate your</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-sunset-pink to-sunset-orange inline-block relative">
                digital presence
                <motion.span
                  className="absolute -inset-1 rounded-lg blur-xl bg-gradient-to-r from-neon-blue/20 via-sunset-pink/20 to-sunset-orange/20 -z-10"
                  animate={{
                    opacity: [0, 0.5, 0.3, 0.5, 0],
                    scale: [0.9, 1, 0.95, 1, 0.9],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </span>{" "}
              <span className="relative">
                with the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset-pink to-neon-pink inline-block">
                  naturewave
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-sunset-pink to-neon-pink rounded-full"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    viewport={{ once: true }}
                  />
                </span>{" "}
                aesthetic?
              </span>
            </h2>

            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Our team combines technical expertise with creative vision to
              deliver marketing solutions that resonate with your audience and
              drive results.
            </motion.p>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <motion.div
              variants={buttonVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              whileTap="tap"
              viewport={{ once: true }}
            >
              <Link
                href="/contact"
                className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white bg-gradient-to-r from-sunset-orange to-sunset-pink rounded-lg group"
              >
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-sunset-pink to-sunset-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
                <span className="relative flex items-center">
                  Schedule a Free Consultation
                  <svg
                    className="ml-2 w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              whileTap="tap"
              viewport={{ once: true }}
              className="group"
            >
              <Link
                href="/work"
                className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white transition-all duration-300 ease-in-out border border-neon-blue rounded-lg group-hover:text-white"
              >
                <span className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-neon-blue to-neon-purple group-hover:w-full transition-all duration-300 ease-in-out" />
                <span className="relative flex items-center">
                  View our work
                  <svg
                    className="ml-2 w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* 3D device mockup */}
      <motion.div
        className="absolute bottom-0 right-0 w-1/4 max-w-xs opacity-30 pointer-events-none z-0"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 0.3, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Simplified device artwork */}
        <svg
          viewBox="0 0 200 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="20"
            y="10"
            width="160"
            height="380"
            rx="20"
            stroke="url(#deviceGradient)"
            strokeWidth="2"
          />
          <rect
            x="30"
            y="40"
            width="140"
            height="280"
            rx="4"
            fill="url(#screenGradient)"
          />
          <motion.circle
            cx="100"
            cy="350"
            r="15"
            stroke="url(#deviceGradient)"
            strokeWidth="2"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <defs>
            <linearGradient
              id="deviceGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#7B5AFF" />
              <stop offset="100%" stopColor="#FF3864" />
            </linearGradient>
            <linearGradient
              id="screenGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#1A1A40" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0A0A20" stopOpacity="0.9" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* 3D cube or sphere */}
      <motion.div
        className="absolute top-20 left-10 opacity-30 pointer-events-none z-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.3, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        animate={{
          rotate: [0, 10, -10, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M50 10L90 30V70L50 90L10 70V30L50 10Z"
            stroke="url(#cubeGradient)"
            strokeWidth="2"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
          <defs>
            <linearGradient
              id="cubeGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#538AFF" />
              <stop offset="100%" stopColor="#FF3864" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </section>
  );
}
// import { useEffect, useRef, useState } from "react";
