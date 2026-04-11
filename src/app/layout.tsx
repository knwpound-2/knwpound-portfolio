import type { Metadata } from "next";
import { Archivo, Besley, Homemade_Apple } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/navbar/NavBar";
import { ResponsiveToast } from "@/components/section/ResponsiveToast";
import { GoogleAnalytics } from "@next/third-parties/google";
import ModeSwitcher from "@/components/section/ModeSwitcher";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const besley = Besley({
  variable: "--font-besley",
  style: ["normal", "italic"],
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const homemade_apple = Homemade_Apple({
  variable: "--font-apple",
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "KnwPound Portfolio",
  description: "Welcome to my visual portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} ${besley.variable} ${homemade_apple.variable} antialiased`}
      >
        <ResponsiveToast />
        <div className="">
          <ModeSwitcher/>
          <NavBar />
        </div>

        {children}
      </body>
      <GoogleAnalytics gaId="G-TRFYD7F9RY" />
    </html>
  );
}
