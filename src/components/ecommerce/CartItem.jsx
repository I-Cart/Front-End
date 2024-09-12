import { TableCell, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Input } from "../ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

function CartItem({ item }) {
  return (
    <TableRow key={item.id}>
      <TableCell>
        <img
          src={item.image}
          alt={item.name}
          className="w-12 h-12 object-cover rounded-md"
        />
      </TableCell>
      <TableCell className="font-medium">{item.name}</TableCell>
      <TableCell>${item.price.toFixed(2)}</TableCell>
      <TableCell>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            // onClick={() => updateQuantity(item.id, item.quantity - 1)}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <Input
            type="number"
            value={item.quantity}
            // onChange={(e) =>
            //   updateQuantity(item.id, parseInt(e.target.value) || 0)
            // }
            className="w-16 text-center"
          />
          <Button
            variant="outline"
            size="icon"
            // onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </TableCell>
      <TableCell>${(item.price * item.quantity).toFixed(2)}</TableCell>
      <TableCell>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="ghost" size="icon">
              <Trash2 className="h-4 w-4" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This will remove {item.name} from your cart. This action cannot
                be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
              //   onClick={() => removeItem(item.id)}
              >
                Remove
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </TableCell>
    </TableRow>
  );
}

export default CartItem;
