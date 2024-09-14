import { NavLink } from "react-router-dom";
import ReusableButton from "./ReusableButton";
import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";

function HeaderList() {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className=" hidden gap-8  md:flex">
      <NavLink
        className={({ isActive }) => {
          return cn("group", {
            active: isActive,
          });
        }}
        to="/gallery"
      >
        <ReusableButton
          className={"group-[.active]:bg-cyan-50 group-[.active]:text-primary"}
        >
          Gallery
        </ReusableButton>
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          return cn("group", {
            active: isActive,
          });
        }}
        to="/about"
      >
        <ReusableButton
          className={"group-[.active]:bg-cyan-50 group-[.active]:text-primary"}
        >
          About US
        </ReusableButton>
      </NavLink>{" "}
      {user && (
        <NavLink
          className={({ isActive }) => {
            return cn("group", {
              active: isActive,
            });
          }}
          to="/orders"
        >
          <ReusableButton
            className={
              "group-[.active]:bg-cyan-50 group-[.active]:text-primary"
            }
          >
            Your Orders
          </ReusableButton>
        </NavLink>
      )}
      <NavLink to="">{/* <ReusableButton>section3</ReusableButton> */}</NavLink>
    </div>
  );
}

export default HeaderList;
