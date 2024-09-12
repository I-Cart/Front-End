import { Link } from "react-router-dom";

function FooterList() {
  return (
    <div className=" text-white  gap-8  md:flex">
      <Link to="">
        about us
      </Link>
      <Link to="">
        contact us      
      </Link>
      <Link to="">
        products
      </Link>
      <Link to="">
        categories
      </Link>
      <Link to="">
        Gallery
      </Link>
    </div>
  );
}

export default FooterList;
