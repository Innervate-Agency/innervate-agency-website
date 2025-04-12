"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SynthwaveGrid from "../ui/SynthwaveGrid";
import { useState } from "react";

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      name: "Graphic Design",
      description:
        "Brand identity, UI/UX design, and digital assets that capture your audience.",
      icon: "✦",
      gradient: "from-sunset-orange to-sunset-pink",
      hoverGradient: "from-sunset-pink via-neon-pink to-sunset-orange",
      delay: 0.1,
    },
    {
      name: "Web Development",
      description:
        "Custom websites and applications built with cutting-edge technology.",
      icon: "◆",
      gradient: "from-neon-blue to-neon-purple",
      hoverGradient: "from-neon-purple via-sunset-pink to-neon-blue",
      delay: 0.2,
    },
    {
      name: "Mobile Solutions",
      description:
        "Native and cross-platform apps that deliver seamless user experiences.",
      icon: "⬡",
      gradient: "from-sunset-pink to-neon-pink",
      hoverGradient: "from-neon-pink via-neon-purple to-sunset-pink",
      delay: 0.3,
    },
    {
      name: "Digital Marketing",
      description:
        "Strategy, campaigns, and content that drives growth and engagement.",
      icon: "✧",
      gradient: "from-neon-orange to-sunset-orange",
      hoverGradient: "from-sunset-orange via-neon-pink to-neon-orange",
      delay: 0.4,
    },
    {
      name: "SEO Optimization",
      description:
        "Data-driven strategies to improve your search engine visibility.",
      icon: "⬢",
      gradient: "from-neon-blue to-neon-purple",
      hoverGradient: "from-neon-purple via-neon-blue to-sunset-pink",
      delay: 0.5,
    },
    {
      name: "Analytics & Insights",
      description:
        "Comprehensive data analysis and actionable business intelligence.",
      icon: "◇",
      gradient: "from-sunset-orange to-neon-pink",
      hoverGradient: "from-neon-pink via-sunset-orange to-neon-blue",
      delay: 0.6,
    },
  ];

  // Card hover animations
  const cardVariants = {
    normal: {
      scale: 1,
      rotateY: 0,
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
      transition: { duration: 0.4, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  // Icon animations
  const iconVariants = {
    normal: {
      scale: 1,
      rotate: 0,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: [1, 1.2, 1.4, 1.2, 1.3],
      rotate: [0, 10, -10, 15, 0, -15, 0],
      y: [0, -10, 0, -5, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  // Link animations
  const linkVariants = {
    normal: {
      y: 30,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    },
    hover: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  // Neon glow animation
  const glowVariants = {
    normal: {
      opacity: 0,
      filter: "blur(8px)",
      transition: { duration: 0.4 },
    },
    hover: {
      opacity: [0.4, 0.6, 0.4],
      filter: "blur(12px)",
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };

  return (
    <section className="relative w-full py-32 overflow-hidden" id="services">
      {/* Full-width background with synthwave effect */}
      <div className="absolute inset-0 bg-brand-dark-blue/80">
        <SynthwaveGrid />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70" />
      </div>

      {/* Stripe-style diagonal dividers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-0 right-0 h-48 transform -skew-y-3 bg-black" />
        <div className="absolute -bottom-24 left-0 right-0 h-48 transform skew-y-3 bg-black" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10">
        {/* Section heading - Left aligned */}
        <div className="max-w-2xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.span
                className="text-neon-blue font-mono text-2xl"
                animate={{
                  textShadow: [
                    "0 0 7px rgba(83, 138, 255, 0.8)",
                    "0 0 10px rgba(83, 138, 255, 0.8)",
                    "0 0 15px rgba(83, 138, 255, 0.6)",
                    "0 0 7px rgba(83, 138, 255, 0.8)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              >
                02.
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-bold">
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-sunset-orange to-sunset-pink inline-block"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Our
                </motion.span>{" "}
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple inline-block"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Services
                </motion.span>
              </h2>
            </div>
            <motion.p
              className="text-xl text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Comprehensive solutions tailored to elevate your digital presence
            </motion.p>
            <motion.div
              className="h-px w-full bg-gradient-to-r from-neon-blue/50 to-transparent"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </div>

        {/* Services grid with enhanced animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: service.delay,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              className="perspective-800"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card with 3D effect */}
              <motion.div
                className="relative h-full"
                variants={cardVariants}
                initial="normal"
                animate={hoveredIndex === index ? "hover" : "normal"}
              >
                {/* Card background with dynamic hover effect */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-xl overflow-hidden">
                  {/* Animated background grid */}
                  <svg
                    className="absolute inset-0 w-full h-full opacity-30"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <motion.pattern
                      id={`grid-${index}`}
                      width="10"
                      height="10"
                      patternUnits="userSpaceOnUse"
                      animate={{
                        x: [0, 10],
                        y: [0, 20],
                      }}
                      transition={{
                        duration: hoveredIndex === index ? 20 : 40,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <circle
                        cx="1"
                        cy="1"
                        r="0.5"
                        fill="rgba(255, 255, 255, 0.3)"
                      />
                    </motion.pattern>
                    <rect
                      width="100%"
                      height="100%"
                      fill={`url(#grid-${index})`}
                    />
                  </svg>
                </div>

                {/* Border glow effect */}
                <motion.div
                  className={`absolute -inset-0.5 rounded-xl bg-gradient-to-r ${service.hoverGradient}`}
                  variants={glowVariants}
                  initial="normal"
                  animate={hoveredIndex === index ? "hover" : "normal"}
                />

                {/* Card content with enhanced animations */}
                <div className="relative p-8 h-full flex flex-col">
                  <motion.div
                    className={`mb-6 text-5xl bg-gradient-to-r ${service.gradient} text-transparent bg-clip-text`}
                    variants={iconVariants}
                    initial="normal"
                    animate={hoveredIndex === index ? "hover" : "normal"}
                  >
                    {service.icon}
                  </motion.div>

                  <motion.h3
                    className={`text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${hoveredIndex === index ? service.hoverGradient : service.gradient}`}
                    animate={
                      hoveredIndex === index
                        ? {
                            backgroundPosition: [
                              "0% 50%",
                              "100% 50%",
                              "0% 50%",
                            ],
                          }
                        : {}
                    }
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    {service.name}
                  </motion.h3>

                  <motion.p
                    className="text-gray-300"
                    animate={
                      hoveredIndex === index
                        ? { color: "#ffffff" }
                        : { color: "#9ca3af" }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    {service.description}
                  </motion.p>

                  {/* Animated link */}
                  <motion.div
                    className="mt-6 overflow-hidden h-8 mt-auto"
                    variants={linkVariants}
                    initial="normal"
                    animate={hoveredIndex === index ? "hover" : "normal"}
                  >
                    <Link
                      href={`/services#${service.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className={`inline-flex items-center text-sm bg-gradient-to-r ${service.gradient} text-transparent bg-clip-text font-medium`}
                    >
                      Learn more
                      <motion.svg
                        className="ml-2 w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          repeatType: "mirror",
                        }}
                      >
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </motion.svg>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-lg bg-transparent border border-neon-blue text-white font-medium"
            >
              <span className="relative z-10">Start your project</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <motion.span
                className="absolute right-4 z-10"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <svg
                  className="w-5 h-5"
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
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
