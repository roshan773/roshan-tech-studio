import { Geist, Geist_Mono } from "next/font/google";
import { Oswald } from "next/font/google"; // ✅ Add this line
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata = {
  title: "Roshan Tech Studio | Web Development & Design Services",
  description: "Roshan Tech Studio offers modern, responsive, and affordable website development services. From design to deployment — your digital vision, delivered.",
  metadataBase: new URL("https://yourwebsite.com"), // replace with your domain
  openGraph: {
    title: "Roshan Tech Studio | Affordable Web Design",
    description: "Custom websites for businesses, startups, and personal brands. Mobile-first, SEO-optimized, and lightning-fast.",
    url: "https://yourwebsite.com",
    siteName: "Roshan Tech Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Roshan Tech Studio – Web Design & Development",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://yourwebsite.com",
  },
  icons: {
    icon: "/public/white version.png",
  },
  authors: [{ name: "Roshan Pakhre", url: "https://www.instagram.com/yourhandle" }],
  creator: "Roshan Tech Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
