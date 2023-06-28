import Footer from "../Footer";
import { Navbar } from "@/components/molecules";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
