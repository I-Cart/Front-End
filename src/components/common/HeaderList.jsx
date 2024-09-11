import { Link } from "react-router-dom";
import ReusableButton from "./ReusableButton";

function HeaderList() {
  return (
    <div className=" hidden gap-8  md:flex">
      <Link to="">
        <ReusableButton>Section1</ReusableButton>
      </Link>
      <Link to="">
        <ReusableButton>section2</ReusableButton>
      </Link>
      <Link to="">
        <ReusableButton>section3</ReusableButton>
      </Link>
    </div>
  );
}

export default HeaderList;
