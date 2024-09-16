import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const UserDetails = ({ user }) => (
  <Card>
    <CardHeader>
      <CardTitle>User Details</CardTitle>
      <CardDescription>Information about {user?.name}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-2">
        <p>
          <span className="font-semibold">Name:</span> {user?.name}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {user?.email}
        </p>
        <p>
          <span className="font-semibold">Phone:</span> {user?.phone}
        </p>
        <p>
          <span className="font-semibold">Role:</span>{" "}
          <Badge
            className={cn("bg-blue-500 text-white", {
              "bg-primary": user?.role === "admin",
            })}
          >
            {user?.role}
          </Badge>
        </p>
      </div>
    </CardContent>
  </Card>
);

export default UserDetails;
