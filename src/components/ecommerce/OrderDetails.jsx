import { format } from "date-fns";
import {
  CardFooter,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
  Card,
} from "../ui/card";
import {
  TableCell,
  TableRow,
  TableBody,
  TableHead,
  TableHeader,
  Table,
} from "../ui/table";

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
export default OrderDetails;
