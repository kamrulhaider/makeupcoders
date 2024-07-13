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
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}>
        <Toaster />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
