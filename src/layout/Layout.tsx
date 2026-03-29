import type { ReactNode } from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

const LayoutGroup = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutGroup;
