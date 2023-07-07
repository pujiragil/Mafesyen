// import Footer from "../Footer";
import { Navbar } from "@/components/molecules";
import { Footer } from "@/components/organism";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      {/* <Footer /> */}
    </>
  );
}
