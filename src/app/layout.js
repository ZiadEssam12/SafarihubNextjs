import "./globals.css";
import { ThemeModeScript } from "flowbite-react";
import NavBar from "@/components/NavBar/NavBar";

export const metadata = {
  title: "عقاري",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head lang="en">
        <ThemeModeScript />
        <meta
          name="description"
          content="A dashboard website that helps companies to Follow up on their work"
        />
      </head>
      <body className="bg-gray-100 dark:bg-gray-700">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
