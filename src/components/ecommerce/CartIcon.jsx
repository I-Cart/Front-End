import { cn } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartIcon() {
  const { totalPrice, count } = useSelector((state) =>
    state.cart.cart.reduce(
      (acc, el) => {
        acc.totalPrice += el.price * el.quantity;
        acc.count += el.quantity;
        return acc;
      },
      { totalPrice: 0, count: 0 }
    )
  );
  return (
    <Link to="/cart">
      <div
        key={count}
        className={cn(
          "bg-lime-700 transition-all duration-300 hover:scale-105 active:scale-95 py-2 items-center px-3 text-white flex gap-3 rounded-full",
          {
            "animate-pulse": count > 0,
          }
        )}
      >
        <ShoppingCart />
        <p>{totalPrice.toFixed(2)}$</p>
        <p className="bg-primary flex items-center text-sm justify-center w-5 h-5 rounded-full ">
          {count}
        </p>
      </div>
    </Link>
  );
}

export default CartIcon;
