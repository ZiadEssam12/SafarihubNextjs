// import { Poppins } from "next/font/google";
//
import Navbar from "@/components/NavBar/NavBar";
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";
import Footer from "@/components/Footer/Footer";
//

export const metadata = {
  title: "SafariHub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/poppins/Poppins-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/poppins/Poppins-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/poppins/Poppins-SemiBold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/poppins/Poppins-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <ThemeModeScript />
        <meta
          name="description"
          content="A dashboard website that helps companies to Follow up on their work"
        />
      </head>

      <body className={`dark:bg-gray-700 overflow-x-hidden bg-gray-100/35`}>
        <Navbar />
        <main className="container min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
