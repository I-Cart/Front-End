import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

function CartIcon() {
  return (
    <Link to="/cart">
      <div className="bg-lime-700 transition-all duration-300 hover:scale-105 active:scale-95 py-2 items-center px-3 text-white flex gap-3 rounded-full">
        <ShoppingCart />
        <p>15.00$</p>
        <p className="bg-primary flex items-center text-sm justify-center w-5 h-5 rounded-full ">
          2
        </p>
      </div>
    </Link>
  );
}

export default CartIcon;
