import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/NavBar";
import { auth } from "../auth";

export default async function layout({ children }) {
  const session = await auth();

  return (
    <>
      <Navbar session={session} />
      <main className="container min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
