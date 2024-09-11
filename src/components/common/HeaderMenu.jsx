import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { IoMenu } from "react-icons/io5";
import ReusableButton from "./ReusableButton";
import { Link } from "react-router-dom";
import HeaderAvatar from "./HeaderAvatar";
function HeaderMenu() {
  return (
    <div className="md:hidden">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <IoMenu color="hsl(var(--primary))" className=" cursor-pointer" />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link to="">Section1</Link>
            </MenubarItem>
            <MenubarItem>
              {" "}
              <Link to="">Section2</Link>
            </MenubarItem>
            <MenubarItem>
              {" "}
              <Link to="">Section3</Link>
            </MenubarItem>
            <MenubarSeparator />
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}

export default HeaderMenu;
