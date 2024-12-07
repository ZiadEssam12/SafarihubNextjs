// import "./globals.css";
import { ThemeModeScript } from "flowbite-react";
import NavBar from "@/components/NavBar/NavBar";

export const metadata = {
  title: "SafariHub",
};

export default function Layout({ children }) {
  return (
    <>
      {/* <NavBar /> */}
      {children}
      {/* <Footer /> */}
    </>
  );
}
