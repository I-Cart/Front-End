import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Eye } from "lucide-react";
import { useSearchParams } from "react-router-dom";
const OrderDetails = ({ order }) => (
  <Card className="max-w-full overflow-auto">
    <CardHeader>
      <CardTitle>Order Details: {order.id}</CardTitle>
      <CardDescription>
        Placed on {format(order.date, "MMMM d, yyyy")}
      </CardDescription>
    </CardHeader>
    <CardContent className="max-h-[50vh] overflow-auto max-w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {order.items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>${item.price.toFixed(2)}</TableCell>
              <TableCell>${(item.quantity * item.price).toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
    <CardFooter className="flex justify-end">
      <div className="text-lg font-bold">
        Total: ${order.price.total.toFixed(2)}
      </div>
    </CardFooter>
  </Card>
);
function OrdersTable() {
  const orders = useSelector((state) => state.orders.orders);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentOrder = searchParams.get("order");
  return (
    <Table>
      <TableCaption>
        {orders.length === 0
          ? "No orders to Display."
          : "A list of your recent orders."}
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Total</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell>{order.id}</TableCell>
            <TableCell>{format(new Date(order.date), "MMM d, yyyy")}</TableCell>
            <TableCell>${order.price.total.toFixed(2)}</TableCell>
            <TableCell>
              <Dialog
                onOpenChange={(open) => {
                  if (open) {
                    searchParams.set("order", order.id);
                    setSearchParams(searchParams);
                  } else {
                    searchParams.delete("order");
                    setSearchParams(searchParams);
                  }
                }}
                open={currentOrder == order.id}
              >
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  <DialogHeader>
                    <DialogTitle>Order Details</DialogTitle>
                    <DialogDescription>
                      Here&apos;s a detailed view of your order.
                    </DialogDescription>
                  </DialogHeader>
                  <OrderDetails order={order} />
                </DialogContent>
              </Dialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default OrdersTable;
