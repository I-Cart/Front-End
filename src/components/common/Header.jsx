import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Link } from "react-router-dom";
import HeaderList from "./HeaderList";
import HeaderAvatar from "./HeaderAvatar";
import HeaderMenu from "./HeaderMenu";

function Header() {
  return (
    <div className="w-full h-32 bg-[hsl(var(--primary))]  p-[15px] pl-[25px] flex items-center justify-between">
      <div>
        <Link to="/" className="flex items-center">
          <img src="../../../assets/logo.png" alt="" className="w-32" />
        </Link>
      </div>
      <HeaderList />
      <div className="flex gap-3">
        <HeaderAvatar />
        <HeaderMenu />
      </div>
    </div>
  );
}

export default Header;
