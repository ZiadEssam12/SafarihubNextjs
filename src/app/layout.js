// import { Poppins } from "next/font/google";
//
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";
import { SessionProvider } from "next-auth/react";
import LoadingAuth from "@/components/LoadingAuth/LoadingAuth";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "SafariHub",
};

export default function RootLayout({ children, session }) {
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
        <SessionProvider session={session}>
          <LoadingAuth>
            <main className="px-0 min-h-screen">{children}</main>
          </LoadingAuth>
        </SessionProvider>
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
