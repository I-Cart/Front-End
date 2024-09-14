import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { IoMenu } from "react-icons/io5";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function HeaderMenu() {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="md:hidden">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <IoMenu color="hsl(var(--primary))" className=" cursor-pointer" />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <NavLink to="/gallery">Gallery</NavLink>
            </MenubarItem>
            <MenubarItem>
              {" "}
              <NavLink to="/about">About US</NavLink>
            </MenubarItem>
            {user && (
              <MenubarItem>
                {" "}
                <NavLink to="/orders">Your Orders</NavLink>
              </MenubarItem>
            )}
            <MenubarSeparator />
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}

export default HeaderMenu;
