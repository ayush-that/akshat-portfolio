import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akshat | DeFi Builder & Researcher",
  description: "Building on EVMs. DeFi protocols, yield mechanics, prediction markets. Systems thinker exploring code, economics, and human behavior.",
  keywords: ["DeFi", "Solidity", "Ethereum", "Smart Contracts", "Yield", "Crypto", "Blockchain"],
  authors: [{ name: "Akshat" }],
  openGraph: {
    title: "Akshat | DeFi Builder & Researcher",
    description: "Building on EVMs. DeFi protocols, yield mechanics, prediction markets.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshat | DeFi Builder & Researcher",
    description: "Building on EVMs. DeFi protocols, yield mechanics, prediction markets.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
