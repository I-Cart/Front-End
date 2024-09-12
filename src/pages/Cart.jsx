import { useState } from "react";
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

// Mock data for cart items
const initialCartItems = [
  {
    id: 1,
    name: "Product 1",
    price: 19.99,
    quantity: 2,
    image: "/assets/manInGreen.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: 29.99,
    quantity: 1,
    image: "/assets/manInGreen.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    price: 39.99,
    quantity: 3,
    image: "/assets/manInGreen.jpg",
  },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity >= 0) {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
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
    <div className="container mx-auto p-4">
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
        <Button size="lg">Proceed to Checkout</Button>
      </div>
    </div>
  );
}
