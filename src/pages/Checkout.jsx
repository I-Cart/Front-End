import CheckoutForm from "@/components/ecommerce/CheckoutForm";
import OrderSummary from "@/components/ecommerce/OrderSummary";
import { useSelector } from "react-redux";

export default function Checkout() {
  const cartItems = useSelector((state) => state.cart.cart);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1;
  const total = subtotal + tax;
  const price = {
    subtotal,
    tax,
    total,
  };
  return (
    <div className="container flex-1 mx-auto p-4">
      <h1 className="text-2xl text-primary font-bold mb-4">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CheckoutForm price={price} cartItems={cartItems} />
        <OrderSummary price={price} cartItems={cartItems} />
      </div>
    </div>
  );
}
