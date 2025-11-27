import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "../context/StoreContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BioArk Tech - Innovative Solutions for Gene Editing and Biotechnology",
  description: "BioArk Tech provides cutting-edge gene editing tools and services for researchers and biotech companies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
