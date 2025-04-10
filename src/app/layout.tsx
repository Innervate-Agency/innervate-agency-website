import type { Metadata } from "next";
import { Ubuntu, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import RootLayoutWrapper from "@/components/layout/RootLayoutWrapper";

// Load Ubuntu font with more weights for better typography
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
  display: "swap",
});

// Load JetBrains Mono with more weights for better typography
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Innervate Agency",
  description:
    "A modern marketing agency combining naturewave aesthetics with cutting-edge digital solutions.",
  keywords: [
    "marketing agency",
    "digital marketing",
    "web design",
    "branding",
    "Idaho",
  ],
  authors: [{ name: "Innervate Agency" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${ubuntu.variable} ${jetbrains.variable}`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans">
        <RootLayoutWrapper ubuntu={ubuntu} jetbrains={jetbrains}>
          {children}
        </RootLayoutWrapper>
      </body>
    </html>
  );
}
