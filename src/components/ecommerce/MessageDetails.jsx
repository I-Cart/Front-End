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
    <Card className="overflow-auto max-w-full">
      <CardHeader>
        <CardTitle>{message.subject}</CardTitle>
        <CardDescription>
          From: {message.name} ({message.email})
        </CardDescription>
      </CardHeader>
      <CardContent className="max-h-[50vh] overflow-auto max-w-full">
        <p className="text-sm text-gray-500 mb-2">
          Received on: {format(message.date, "PPpp")}
        </p>
        <p className="whitespace-pre-wrap max-w-50 break-words overflow-hidden">
          {message.message}
        </p>
      </CardContent>
    </Card>
  );
};

export default MessageDetails;
