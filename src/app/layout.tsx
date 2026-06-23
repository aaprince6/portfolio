import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const siteUrl = "https://lazimalahasan.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lazim Al Ahasan | Web Developer & Embedded Systems Engineer",
    template: "%s | Lazim Al Ahasan",
  },
  description:
    "Computer Science student at North South University. Building modern web applications, embedded systems with STM32, Java applications, and educational technology.",
  keywords: [
    "Lazim Al Ahasan", "portfolio", "web developer", "embedded systems",
    "Java", "North South University", "CSE", "STM32", "React", "Next.js",
    "Bangladesh", "Dhaka",
  ],
  authors: [{ name: "Lazim Al Ahasan", url: siteUrl }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Lazim Al Ahasan | Web Developer & Embedded Systems Engineer",
    description:
      "Building modern web applications, embedded systems with STM32, Java applications, and educational technology.",
    type: "website",
    locale: "en_US",
    siteName: "Lazim Al Ahasan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lazim Al Ahasan | Portfolio",
    description:
      "Computer Science student at NSU. Web dev, embedded systems, Java, content creator.",
  },
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Lazim Al Ahasan",
              givenName: "Lazim",
              familyName: "Al Ahasan",
              email: "alahasanlazim@gmail.com",
              url: siteUrl,
              jobTitle: "Computer Science Student",
              alumniOf: "North South University",
              knowsAbout: ["Web Development", "Embedded Systems", "Java", "STM32", "React"],
              sameAs: [
                "https://github.com/aaprince6",
                "https://www.linkedin.com/in/lazim-al-ahasan-0030a8214/",
                "https://www.youtube.com/@lazimalahasan9047",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--color-bg)]" suppressHydrationWarning>
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
