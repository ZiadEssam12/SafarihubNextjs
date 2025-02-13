// import { Poppins } from "next/font/google";
//
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";
//

export const metadata = {
  title: "عقاري",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head lang="en">
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
      <body className={`dark:bg-gray-700 overflow-x-hidden bg-gray-100`}>
        {children}
      </body>
    </html>
  );
}
