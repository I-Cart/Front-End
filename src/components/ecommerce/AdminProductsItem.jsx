import { useState } from "react";
import { TableCell, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { Pencil, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import ProductForm from "./ProductForm";
import { useDispatch } from "react-redux";
import { deleteProduct } from "@/store/products/productsSlice";

function AdminProductsItem({ product }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const dispatch = useDispatch();
  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <TableRow key={product.id}>
      <TableCell>{product.id}</TableCell>
      <TableCell>
        <img
          src={product.img}
          alt={product.title}
          className="w-16 h-16 object-contain rounded"
        />
      </TableCell>
      <TableCell>{product.title}</TableCell>
      <TableCell
        title={product.description}
        className="text-sm max-w-72 whitespace-nowrap text-ellipsis overflow-hidden"
      >
        {product.description}
      </TableCell>
      <TableCell>${product.price.toFixed(2)}</TableCell>
      <TableCell>
        <div className="flex space-x-2">
          <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <Pencil className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogTitle>Edit Product</DialogTitle>
              <ProductForm
                setIsOpen={setIsEditOpen}
                isEditing={true}
                product={product}
              />
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <Trash2 className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Delete Product</DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete this product?
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="justify-end">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button
                    onClick={() => handleDeleteProduct(product.id)}
                    type="button"
                    variant="destructive"
                  >
                    Delete
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </TableCell>
    </TableRow>
  );
}
export default AdminProductsItem;
