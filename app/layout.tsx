import type { Metadata } from "next";
import { Dancing_Script, Inter, Pacifico, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing-script",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
});

export const metadata: Metadata = {
  title: "Hairdressing by Paula Lorraine",
  description:
    "Professional hairdressing services in Trefriw, North Wales. Ladies cuts, colour, special occasion hair and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(dancingScript.variable, inter.variable, pacifico.variable, playfair.variable, "font-sans")}
    >
      <body>
        {children}
        <Script
          src="https://embeds.iubenda.com/widgets/ca6360c0-2d07-4c6e-965a-5314cd04feb4.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.iubenda.com/iubenda.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
