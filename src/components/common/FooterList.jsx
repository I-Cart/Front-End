import { Link } from "react-router-dom";

function FooterList() {
  return (
    <div className=" text-white  gap-8  md:flex">
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/gallery">Gallery</Link>
    </div>
  );
}

export default FooterList;
