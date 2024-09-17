import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { markAsRead } from "@/store/messages/messagesSlice";
import { format } from "date-fns";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
const MessageDetails = ({ message }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(markAsRead(message.id));
  }, [message.id, dispatch]);
  return (
    <Card>
      <CardHeader>
        <CardTitle>{message.subject}</CardTitle>
        <CardDescription>
          From: {message.name} ({message.email})
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500 mb-2">
          Received on: {format(message.date, "PPpp")}
        </p>
        <p className="whitespace-pre-wrap">{message.message}</p>
      </CardContent>
    </Card>
  );
};

export default MessageDetails;
