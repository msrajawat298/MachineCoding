import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css'; // Keep for compatibility for now, but ideally remove
import "./globals.css"; // Import after bootstrap to override
import Header from "@/component/Layout/Header";
import Footer from "@/component/Layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export const metadata = {
  title: {
    default: "FrontendForge | Machine Coding Sandbox",
    template: "%s | FrontendForge",
  },
  description:
    "Practice real-world frontend interview questions with an interactive sandbox from VitableTech.",
  keywords: [
    "machine coding",
    "frontend interview",
    "react",
    "next.js",
    "coding sandbox",
    "vitabletech",
  ],
  authors: [{ name: "VitableTech" }],
  openGraph: {
    title: "VitableTech | Machine Coding Sandbox",
    description:
      "Practice real-world frontend interview questions with an interactive sandbox from VitableTech.",
    url: "https://sandbox.vitabletech.in",
    siteName: "VitableTech Sandbox",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VitableTech Sandbox",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VitableTech | Machine Coding Sandbox",
    description:
      "Practice real-world frontend interview questions with an interactive sandbox from VitableTech.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <main style={{ flex: 1 }}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

