import { Titillium_Web } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

export const metadata = {
  title: "Makeup Coders - Home",
  description:
    "Welcome to Makeup Coders! We're passionate about creating websites, apps, and stunning designs that not only look amazing but also work seamlessly. Our friendly team is here to turn your ideas into reality, making sure your digital presence is as unique as your vision.",
  alternates: {
    canonical: "https://makeupcoders.com/",
  },
  openGraph: {
    title: "Makeup Coders - Home",
    description:
      "Makeup Coders crafts beautiful, high-performing websites and apps tailored to your brand.",
    url: "https://makeupcoders.com/",
    siteName: "Makeup Coders",
    images: [
      {
        url: "https://makeupcoders.com/og/poster.png",
        alt: "Makeup Coders — Featured",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="r483ezmd8Klm95j9HE0Ogq32Ro5a0mwmU5tAjto5Zm0"
        />
        <meta
          name="description"
          content="Makeup Coders crafts beautiful, high-performing websites and apps tailored to your brand."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://makeupcoders.com/" />
        {/* Open Graph */}
        <meta property="og:title" content="Makeup Coders - Home" />
        <meta
          property="og:description"
          content="Makeup Coders crafts beautiful, high-performing websites and apps tailored to your brand."
        />
        <meta property="og:url" content="https://makeupcoders.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://makeupcoders.com/images/hero/hero-img.png"
        />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Makeup Coders - Home" />
        <meta
          name="twitter:description"
          content="Makeup Coders crafts beautiful, high-performing websites and apps tailored to your brand."
        />
        <meta
          name="twitter:image"
          content="https://makeupcoders.com/images/hero/hero-img.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Makeup Coders",
              url: "https://makeupcoders.com",
              logo: "https://makeupcoders.com/images/logo/logo.png",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Toaster />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
