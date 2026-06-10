import type { Metadata } from "next";
import { Dancing_Script, Montserrat, Pacifico, Platypi } from "next/font/google";
import "./globals.css";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing-script",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
});

const platypi = Platypi({
  subsets: ["latin"],
  variable: "--font-platypi",
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
      className={`${dancingScript.variable} ${montserrat.variable} ${pacifico.variable} ${platypi.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
