import { Link } from "react-router-dom";
import HeaderList from "./HeaderList";
import HeaderAvatar from "./HeaderAvatar";
import HeaderMenu from "./HeaderMenu";
import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import CartIcon from "../ecommerce/CartIcon";

function Header() {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="w-full h-32 bg-[hsl(var(--primary))]  p-[15px] pl-[25px] flex items-center justify-between">
      <div>
        <Link to="/" className="flex items-center">
          <img src="/assets/logo.png" alt="" className="w-32" />
        </Link>
      </div>
      <HeaderList />
      <div className="flex items-center gap-3">
        <CartIcon />
        {user ? (
          <HeaderAvatar />
        ) : (
          <Button className="bg-yellow-700 hover:bg-yellow-600" asChild>
            <Link to={"login"}>Login</Link>
          </Button>
        )}
        <HeaderMenu />
      </div>
    </div>
  );
}

export default Header;
