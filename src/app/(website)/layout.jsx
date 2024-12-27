// import "./globals.css";
// import { ThemeModeScript } from "flowbite-react";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "SafariHub",
};

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main className="container min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
