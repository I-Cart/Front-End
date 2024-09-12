import Logo from "@/components/common/Logo";
import { Link, Outlet } from "react-router-dom";

function LoginLayout() {
  return (
    <div className="min-h-screen flex flex-col px-2 py-3  md:px-6 md:py-8 xl:px-8 xl:py-11">
      <Link to="/">
        <Logo />
      </Link>
      <Outlet />
    </div>
  );
}

export default LoginLayout;
