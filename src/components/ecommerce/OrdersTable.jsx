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

import { Button } from "../ui/button";
import { Eye } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import OrderDetails from "./OrderDetails";
function OrdersTable() {
  const orders = useSelector((state) => state.orders.orders);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentOrder = searchParams.get("order");
  if (orders.length === 0) {
    return (
      <p className="text-center text-lg text-muted-foreground flex-1 h-full flex items-center justify-center">
        No orders to Display.
      </p>
    );
  }
  return (
    <Table>
      <TableCaption>A list of your recent orders.</TableCaption>
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
