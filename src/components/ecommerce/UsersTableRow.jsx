import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { TableCell, TableRow } from "../ui/table";
import UserDetails from "./UserDetails";
import EditUserForm from "./EditUserForm";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "@/store/users/usersSlice";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
const UserDetailsDialog = ({ user }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline" size="sm">
        View
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>User Details</DialogTitle>
        <DialogDescription>
          Detailed information about the user.
        </DialogDescription>
      </DialogHeader>
      <UserDetails user={user} />
    </DialogContent>
  </Dialog>
);
const EditUserDialog = ({ user, open, setOpen }) => (
  <Dialog open={open} onOpenChange={setOpen}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit User</DialogTitle>
        <DialogDescription>
          Make changes to the user&apos;s information.
        </DialogDescription>
      </DialogHeader>
      <EditUserForm setOpen={setOpen} user={user} />
    </DialogContent>
  </Dialog>
);
const DeleteUserDialog = ({ user, open, setOpen }) => {
  const loggedInUser = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete User</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this user?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            disabled={user?.email === loggedInUser?.email}
            variant="destructive"
            onClick={() => {
              dispatch(deleteUser(user));
              setOpen(false);
            }}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
function UsersTableRow({ user }) {
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  return (
    <TableRow key={user?.email}>
      <TableCell>{user?.name}</TableCell>
      <TableCell>{user?.email}</TableCell>
      <TableCell>
        <Badge
          className={cn("bg-blue-500", {
            "bg-primary": user?.role === "admin",
          })}
        >
          {user?.role}
        </Badge>
      </TableCell>
      <TableCell>
        <div className="flex space-x-2">
          <UserDetailsDialog user={user} />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  setEditOpen(true);
                }}
              >
                <Pencil className="h-4 w-4 mr-2" />
                Edit
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => {
                  setDeleteOpen(true);
                }}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <EditUserDialog user={user} open={editOpen} setOpen={setEditOpen} />
          <DeleteUserDialog
            user={user}
            open={deleteOpen}
            setOpen={setDeleteOpen}
          />
        </div>
      </TableCell>
    </TableRow>
  );
}

export default UsersTableRow;
