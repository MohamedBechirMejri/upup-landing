import type { Metadata } from "next";

import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className + " min-h-screen relative"}>
        <Navbar />
        {children}

        <footer className="fixed bottom-0 right-0 p-4 text-white">
          <a
            href="https://devino.ca"
            target="_blank"
            className="hover:underline"
          >
            Devino Technologies Inc
          </a>
        </footer>
      </body>
    </html>
  );
}
