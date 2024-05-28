import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/Navbar";


export const metadata: Metadata = {
  title: "RealmAI",
  description: "RealmAI | Bringing Real World Asset Tokenization to Solana Driven by Artificial Intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>RealmAI</title>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
