import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Outlet />
    </div>
  );
}

export default AppLayout;
