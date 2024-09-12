import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import loginSchema from "@/schemas/loginSchema";
import { Link, useNavigate } from "react-router-dom";
import { Separator } from "../ui/separator";
import { useDispatch, useSelector } from "react-redux";
import { clearFeedback, login } from "@/store/auth/authSlice";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import PasswordInput from "../common/PasswordInput";

function LoginForm() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });
  const { toast } = useToast();
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(clearFeedback());
    return () => dispatch(clearFeedback());
  }, [dispatch]);
  useEffect(() => {
    if (error) {
      toast({
        title: "❌" + error.message,
      });
    }
  }, [error, toast]);
  useEffect(() => {
    if (loading === "succeeded") {
      navigate("/", {
        replace: true,
      });
      toast({
        title: "✅ Logged in successfully!",
      });
    }
  }, [loading, navigate, toast]);
  function onSubmit(values) {
    dispatch(login(values));
  }
  return (
    <div className="max-w-96 w-full px-2 py-3 md:px-5 md:py-7 border rounded-md mx-auto my-auto ">
      <h1 className="font-bold mb-5 text-3xl text-center">Login</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder="Password"
                    type="password"
                    field={field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={
              loading === "pending" ||
              Object.values(form.formState.errors).length > 0
            }
            className="w-full"
            type="submit"
          >
            {loading === "pending" ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait...
              </>
            ) : (
              <>Submit</>
            )}
          </Button>
        </form>
      </Form>
      <Separator className="my-5" />
      <p className="text-center text-gray-400">
        Don&apos;t have an account?{" "}
        <Link
          to="/register"
          className="text-primary hover:text-yellow-300 transition-colors duration-300"
        >
          Register
        </Link>{" "}
        Now.
      </p>
    </div>
  );
}

export default LoginForm;
