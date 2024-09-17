import { Eye, MoreHorizontal, Trash2 } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import MessageDetails from "./MessageDetails";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { TableCell, TableRow } from "../ui/table";
import { Badge } from "../ui/badge";
import { format } from "date-fns";
import { useDispatch } from "react-redux";
import { deleteMessage, markAsRead } from "@/store/messages/messagesSlice";

function MessageTableRow({ message }) {
  const dispatch = useDispatch();
  return (
    <TableRow key={message.id}>
      <TableCell>{format(message.date, "PP")}</TableCell>
      <TableCell>{message.name}</TableCell>
      <TableCell>{message.email}</TableCell>
      <TableCell>{message.subject}</TableCell>
      <TableCell>
        <Badge variant={message.status === "unread" ? "default" : "secondary"}>
          {message.status}
        </Badge>
      </TableCell>
      <TableCell>
        <div className="flex space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                View
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Message Details</DialogTitle>
                <DialogDescription>
                  Full message content and details.
                </DialogDescription>
              </DialogHeader>
              <MessageDetails message={message} />
            </DialogContent>
          </Dialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {message.status === "unread" && (
                <DropdownMenuItem
                  onClick={() => dispatch(markAsRead(message.id))}
                >
                  Mark as Read
                </DropdownMenuItem>
              )}
              <DropdownMenuItem
                onClick={() => dispatch(deleteMessage(message.id))}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </TableCell>
    </TableRow>
  );
}

export default MessageTableRow;
