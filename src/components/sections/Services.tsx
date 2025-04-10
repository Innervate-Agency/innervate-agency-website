"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaPencilRuler,
  FaMobileAlt,
  FaChartLine,
  FaCode,
  FaSearchDollar,
  FaBullhorn,
} from "react-icons/fa";

export default function Services() {
  // Services data with a vibrant color palette including orange, blue, pink, green, and yellow tones
  const servicesList = [
    {
      title: "Graphic Design",
      description:
        "From branding to print and digital assets, we create visuals that tell your story and captivate your audience.",
      icon: FaPencilRuler,
      iconColor: "text-neon-orange",
      titleGradient: "from-neon-orange to-sunset-orange",
      cardBg: "bg-black/30",
      delay: 0.1,
    },
    {
      title: "Web Development",
      description:
        "Custom, responsive websites and apps built with modern frameworks and seamless user experiences.",
      icon: FaCode,
      iconColor: "text-neon-blue",
      titleGradient: "from-neon-blue to-neon-purple",
      cardBg: "bg-black/30",
      delay: 0.2,
    },
    {
      title: "Mobile Solutions",
      description:
        "Native and cross-platform mobile apps designed for performance and user engagement.",
      icon: FaMobileAlt,
      iconColor: "text-sunset-pink",
      titleGradient: "from-sunset-pink to-neon-purple",
      cardBg: "bg-black/30",
      delay: 0.3,
    },
    {
      title: "Digital Marketing",
      description:
        "Strategic campaigns that connect with your target audience and drive measurable results.",
      icon: FaBullhorn,
      iconColor: "text-neon-orange",
      titleGradient: "from-neon-orange to-sunset-orange",
      cardBg: "bg-black/30",
      delay: 0.4,
    },
    {
      title: "SEO Optimization",
      description:
        "Data-driven strategies to improve your visibility and organic traffic across search engines.",
      icon: FaSearchDollar,
      iconColor: "text-neon-green",
      titleGradient: "from-neon-green to-neon-blue",
      cardBg: "bg-black/30",
      delay: 0.5,
    },
    {
      title: "Analytics & Insights",
      description:
        "Comprehensive data analysis and reporting to inform your marketing and business decisions.",
      icon: FaChartLine,
      iconColor: "text-neon-yellow",
      titleGradient: "from-neon-yellow to-neon-orange",
      cardBg: "bg-black/30",
      delay: 0.6,
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#09031D] via-[#140A29] to-[#09031D]"></div>
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,56,100,0.15),transparent_50%)] animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(123,90,255,0.1),transparent_50%)] animate-pulse-slower"></div>
        </div>
      </div>

      {/* Section content */}
      <div className="container-wide relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4">
            <span className="text-sunset-orange font-mono text-2xl">02.</span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset-orange to-sunset-pink">
                Services
              </span>
            </h2>
          </div>
          <div className="mt-4 h-px w-full bg-gradient-to-r from-sunset-orange/50 to-transparent"></div>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: service.delay }}
              viewport={{ once: true }}
              className={`${service.cardBg} backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden p-6 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-black/30`}
            >
              <div className="mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-md bg-gradient-to-br from-[#09031D] to-black/50 border border-white/10">
                  <service.icon className={`text-xl ${service.iconColor}`} />
                </div>
              </div>

              <h3
                className={`text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${service.titleGradient}`}
              >
                {service.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              <a
                href="#"
                className={`inline-flex items-center text-xs ${service.iconColor} hover:underline transition-all duration-300`}
              >
                Learn more
                <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
