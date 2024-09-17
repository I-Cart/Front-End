import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function FooterList() {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className=" text-white  gap-8  md:flex">
      <Link to="/about">About Us</Link>
      {user?.role !== "admin" && <Link to="/contact-us">Contact Us</Link>}
      <Link to="/gallery">Gallery</Link>
    </div>
  );
}

export default FooterList;
