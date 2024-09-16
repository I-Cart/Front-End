import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Link } from "react-router-dom";
import CartItem from "@/components/ecommerce/CartItem";
import { useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cart);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="container flex-1 flex flex-col justify-center items-center mx-auto p-4 text-center">
        <h1 className="text-2xl text-primary font-bold mb-4">Your Cart</h1>
        <p className="text-lg">
          Your cart is empty. Start shopping to add items to your cart!
        </p>

        <Button asChild className="mt-4">
          <Link to={"/"}>Back to Home Page</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto flex-1 p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <Table>
        <TableCaption>A list of your cart items.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Total</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </TableBody>
      </Table>
      <div className="mt-4 flex justify-between items-center">
        <div className="text-xl font-semibold">
          Subtotal: ${subtotal.toFixed(2)}
        </div>
        <Button asChild size="lg">
          <Link to={"/check-out"}>Proceed to Checkout</Link>
        </Button>
      </div>
    </div>
  );
}
