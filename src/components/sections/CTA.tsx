"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-neon-pink/10 blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-neon-blue/10 blur-[100px]" />
      </div>

      <div className="container-wide relative z-10">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black/40 via-[#14082c]/40 to-black/40 backdrop-blur-md p-12">
          {/* Content container */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
            {/* Left side text */}
            <div className="md:w-3/5">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Ready to elevate your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                  digital presence
                </span>{" "}
                with the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset-orange to-sunset-pink">
                  naturewave
                </span>{" "}
                aesthetic?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-300 mb-8"
              >
                Our team combines technical expertise with creative vision to
                deliver marketing solutions that resonate with your audience and
                drive results.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-sunset-pink to-sunset-orange text-white font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sunset-orange/20"
                >
                  Schedule a Free Consultation
                </Link>

                <Link
                  href="/work"
                  className="px-6 py-3 rounded-lg bg-opacity-10 bg-white border border-white/20 text-white font-medium hover:bg-opacity-20 transition-all duration-300 hover:scale-105 hover:border-neon-blue/30 group flex items-center"
                >
                  <span>View our work</span>
                  <svg
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </motion.div>
            </div>

            {/* Right side decorative elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="md:w-2/5 flex justify-center"
            >
              <div className="relative w-64 h-64">
                {/* Floating circle elements */}
                <motion.div
                  className="absolute top-10 right-10 w-16 h-16 rounded-full bg-sunset-pink/30"
                  animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-10 left-10 w-20 h-20 rounded-full bg-neon-blue/20"
                  animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Background grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30" />
        </div>
      </div>
    </section>
  );
}
