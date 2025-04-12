"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import DiagonalDivider from "../ui/DiagonalDivider";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Work", href: "/work" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Design", href: "/services#design" },
        { name: "Development", href: "/services#development" },
        { name: "Marketing", href: "/services#marketing" },
        { name: "Analytics", href: "/services#analytics" },
      ],
    },
    {
      title: "Connect",
      links: [
        { name: "LinkedIn", href: "https://linkedin.com" },
        { name: "Twitter", href: "https://twitter.com" },
        { name: "Instagram", href: "https://instagram.com" },
        { name: "GitHub", href: "https://github.com" },
      ],
    },
  ];

  return (
    <footer className="relative w-full bg-black pt-32 pb-8">
      <DiagonalDivider
        position="top"
        colorFrom="#000000"
        colorTo="rgba(13, 13, 42, 0.95)"
        height={160}
        angle={-4}
        withGlow
      />

      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-sunset-orange/20 to-sunset-pink/10 blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/10 blur-[120px]"
        />
      </div>

      <div className="container-wide relative">
        {/* Footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <h2 className="text-3xl font-mono">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset-pink via-sunset-orange to-neon-pink font-semibold">
                  innervate
                </span>
                <span className="text-white font-light">.agency</span>
              </h2>
            </Link>
            <p className="text-gray-400 mb-8">
              Blending Idaho&apos;s breathtaking landscapes with cutting-edge
              digital innovation to create unique naturewave experiences.
            </p>
            <div className="space-y-4">
              <p className="text-gray-400">
                <strong className="text-white">Location:</strong> Boise, Idaho
              </p>
              <p className="text-gray-400">
                <strong className="text-white">Email:</strong>{" "}
                <a
                  href="mailto:hello@innervate.agency"
                  className="hover:text-sunset-orange transition-colors"
                >
                  hello@innervate.agency
                </a>
              </p>
              <p className="text-gray-400">
                <strong className="text-white">Phone:</strong>{" "}
                <a
                  href="tel:+12083451234"
                  className="hover:text-sunset-orange transition-colors"
                >
                  (208) 345-1234
                </a>
              </p>
            </div>
          </div>

          {/* Links columns */}
          {footerLinks.map((column, index) => (
            <div key={index} className="lg:col-span-2">
              <h3 className="text-white font-semibold mb-6">{column.title}</h3>
              <ul className="space-y-4">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-sunset-orange transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter column */}
          <div className="lg:col-span-4">
            <h3 className="text-white font-semibold mb-6">Stay in the loop</h3>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sunset-orange transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-sunset-orange to-sunset-pink text-white font-medium hover:opacity-90 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} innervate.agency. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-sunset-orange text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-sunset-orange text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
