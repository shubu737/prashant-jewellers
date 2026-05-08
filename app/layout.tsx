import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MobileCta from "../components/mobile-cta";

export const metadata: Metadata = {
  title: "Prashant Jewellers | Premium Jewellery Collection",
  description: "Discover exquisite handcrafted jewellery at Prashant Jewellers. Rings, necklaces, earrings and bangles crafted for elegance and style.",
  keywords: "jewellery, gold, rings, necklaces, earrings, bangles, Rawatbhata, Rajasthan",
  openGraph: {
    title: "Prashant Jewellers | Premium Jewellery Collection",
    description: "Handcrafted luxury jewellery for every occasion. Visit our store in Rawatbhata.",
    type: "website",
    locale: "en_IN"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileCta />
        </div>
      </body>
    </html>
  );
}
