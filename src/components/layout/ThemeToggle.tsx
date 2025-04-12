"use client";

import { motion } from "framer-motion";

interface ThemeToggleProps {
  theme: string | undefined;
  onChange: () => void;
  className?: string;
}

export default function ThemeToggle({
  theme,
  onChange,
  className = "",
}: ThemeToggleProps) {
  return (
    <button
      onClick={onChange}
      className={`p-2.5 rounded-full text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 
                  focus:outline-none focus:ring-2 focus:ring-sunset-orange/20 
                  transition-all duration-200 relative overflow-hidden group ${className}`}
      aria-label="Toggle theme"
    >
      <span className="absolute inset-0 bg-gradient-to-br from-sunset-orange/10 via-sunset-pink/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {theme === "dark" ? (
        // Sun Icon (Light Mode)
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          initial={{ scale: 0.5, rotate: -30, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </motion.svg>
      ) : (
        // Moon Icon (Dark Mode)
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          initial={{ scale: 0.5, rotate: 30, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </motion.svg>
      )}
    </button>
  );
}
