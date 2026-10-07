import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayouts({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
