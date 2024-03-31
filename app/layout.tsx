import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

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
      <StoreProvider>
        <body className={inter.className}>
          <div className="w-64 rounded-xl border-2 h-[34rem] flex flex-col justify-between">
            {children}
            <NavBar />
          </div>
        </body>
      </StoreProvider>
    </html>
  );
}
