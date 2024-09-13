import { Link } from "react-router-dom";
import ReusableButton from "../common/ReusableButton";

function ProductInCart() {
  return (
    <div>
      <p>the product is already added to your cart</p>
      <div className=" mt-3">
        <Link to="/cart">
          <ReusableButton>Go To Cart</ReusableButton>
        </Link>
      </div>
    </div>
  );
}

export default ProductInCart;
