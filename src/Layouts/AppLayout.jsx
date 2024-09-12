import Header from "@/components/common/Header";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className=" min-h-screen flex flex-col">
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
