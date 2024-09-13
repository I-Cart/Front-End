import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className=" min-h-screen flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
