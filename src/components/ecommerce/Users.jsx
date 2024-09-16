import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSelector } from "react-redux";
import UsersTableRow from "./UsersTableRow";
import RegisterFormDialog from "./RegisterFormDialog";

export default function Users() {
  const users = useSelector((state) => state.users.users);
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-primary">Users</h2>
        <RegisterFormDialog />
      </div>
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <UsersTableRow key={user?.email} user={user} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
