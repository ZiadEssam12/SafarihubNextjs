import Footer from "@/components/Footer/Footer";
import ClientNavbar from "@/components/NavBar/ClientNavbar";
import Navbar from "@/components/NavBar/NavBar";

export default function layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
