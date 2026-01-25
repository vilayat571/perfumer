import type { ReactNode } from "react";
import Navbar from "../components/Layout/Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
