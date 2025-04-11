// import CustomizeNileTrip from "@/components/CustomizeNileTrip/CustomizeNileTrip";
// import Footer from "@/components/Footer/Footer";
// import Navbar from "@/components/NavBar/NavBar";

export default function layout({ children }) {
  return (
    <>
      {/* <Navbar /> */}
      <main className="container min-h-screen">{children}</main>
      {/* <CustomizeNileTrip />
      <Footer /> */}
    </>
  );
}
