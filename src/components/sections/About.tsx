"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  const services = [
    {
      name: "Design",
      description: "Brand identity, UI/UX, print & digital assets",
      iconColor: "text-neon-orange",
      bgColor: "bg-sunset-orange/20",
      delay: 0.1,
    },
    {
      name: "Development",
      description: "Web, mobile & custom applications",
      iconColor: "text-neon-blue",
      bgColor: "bg-neon-blue/20",
      delay: 0.2,
    },
    {
      name: "Marketing",
      description: "Strategy, social media & content creation",
      iconColor: "text-sunset-pink",
      bgColor: "bg-sunset-pink/20",
      delay: 0.3,
    },
    {
      name: "Growth",
      description: "SEO, analytics & business strategy",
      iconColor: "text-neon-orange",
      bgColor: "bg-sunset-orange/20",
      delay: 0.4,
    },
  ];

  return (
    <section className="relative w-full py-24 overflow-visible" id="about">
      {/* Floating subtle gradients */}
      <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-black/90 to-transparent z-10"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2 }}
        className="absolute top-40 left-20 w-80 h-80 rounded-full bg-gradient-to-br from-sunset-orange/10 to-sunset-pink/5 blur-[120px] -z-10"
      />

      <div className="container-wide relative z-10">
        {/* Numbered section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4">
            <span className="text-sunset-orange font-mono text-2xl">01.</span>
            <h2 className="text-4xl md:text-5xl font-bold">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset-orange to-sunset-pink">
                innervate.agency
              </span>
            </h2>
          </div>
          <div className="mt-4 h-px w-full bg-gradient-to-r from-sunset-orange/50 to-transparent"></div>
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left column - Agency description */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sunset-orange to-sunset-pink">
                We craft digital experiences that captivate and convert
              </h3>

              <div className="space-y-6 text-gray-300">
                <p>
                  Innervate is a full-service creative agency based in Boise,
                  Idaho. We blend technology, design, and strategic marketing to
                  help brands stand out in today&apos;s digital landscape.
                </p>
                <p>
                  Our{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset-orange to-sunset-pink">
                    naturewave
                  </span>{" "}
                  aesthetic draws inspiration from Idaho&apos;s breathtaking
                  landscapes, combining organic elements with digital artistry
                  to create experiences that feel both futuristic and naturally
                  inviting.
                </p>
                <p>
                  Whether you&apos;re a startup looking to make your mark or an
                  established brand seeking reinvention, we&apos;re here to help
                  you grow and evolve.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-sunset-orange to-sunset-pink text-white font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sunset-orange/20"
                >
                  <span>Start your project</span>
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
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right column - Services */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-right mb-8"
            >
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                Comprehensive marketing solutions
                <br />
                tailored to your unique vision
              </h3>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: service.delay }}
                  viewport={{ once: true }}
                  className="p-6 rounded-lg bg-black/20 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300"
                >
                  <div
                    className={`mb-4 w-10 h-10 rounded-full flex items-center justify-center ${service.bgColor}`}
                  >
                    <span className={`text-xl ${service.iconColor}`}>✦</span>
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-white">
                    {service.name}
                  </h4>
                  <p className="text-sm text-gray-400">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
