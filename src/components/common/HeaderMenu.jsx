import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { IoMenu } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function HeaderMenu() {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  return (
    <div className="md:hidden">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <IoMenu color="hsl(var(--primary))" className=" cursor-pointer" />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={() => navigate("/gallery")}>
              Gallery
            </MenubarItem>
            <MenubarItem onClick={() => navigate("/about")}>
              About US
            </MenubarItem>
            {user?.role !== "admin" && (
              <MenubarItem onClick={() => navigate("/contact-us")}>
                Contact US
              </MenubarItem>
            )}
            {user && (
              <MenubarItem onClick={() => navigate("/orders")}>
                Your Orders
              </MenubarItem>
            )}
            {user?.role === "admin" && (
              <MenubarItem onClick={() => navigate("/dashboard")}>
                Dashboard
              </MenubarItem>
            )}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}

export default HeaderMenu;
