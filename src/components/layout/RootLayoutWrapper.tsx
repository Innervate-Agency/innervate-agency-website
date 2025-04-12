"use client";

import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/Navbar";

type RootLayoutWrapperProps = {
  children: React.ReactNode;
  ubuntu: { variable: string };
  jetbrains: { variable: string };
};

export default function RootLayoutWrapper({
  children,
  // We're intentionally using these props elsewhere
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ubuntu,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  jetbrains,
}: RootLayoutWrapperProps) {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full bg-gradient-to-b from-brand-dark-blue via-brand-dark to-[#120726]">
        <Navbar />
        <div className="w-full">{children}</div>
      </div>
    </ThemeProvider>
  );
}
