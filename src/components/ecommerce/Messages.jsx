import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import MessageTableRow from "./MessageTableRow";
import { useSelector } from "react-redux";

export default function Messages() {
  const messages = useSelector((state) => state.messages.messages);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-primary">Messages</h2>
      </div>
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {messages.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center">
                  No messages found
                </TableCell>
              </TableRow>
            ) : (
              messages.map((message) => (
                <MessageTableRow key={message.id} message={message} />
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
