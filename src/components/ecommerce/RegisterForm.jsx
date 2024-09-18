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
import { Link, useNavigate } from "react-router-dom";
import { Separator } from "../ui/separator";
import registerSchema from "@/schemas/RegisterSchema";
import PasswordInput from "../common/PasswordInput";
import { useDispatch, useSelector } from "react-redux";
import { clearFeedback, createUser } from "@/store/users/usersSlice";
import { useEffect, useLayoutEffect } from "react";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { cn } from "@/lib/utils";
function RegisterForm({ isAdmin, setIsOpen }) {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      role: "user",
    },
    mode: "onBlur",
  });
  const { loading, errors } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useLayoutEffect(() => {
    dispatch(clearFeedback());
    return () => dispatch(clearFeedback());
  }, [dispatch]);
  useEffect(() => {
    if (loading === "succeeded") {
      if (!isAdmin) {
        navigate("/login");
      } else {
        setIsOpen(false);
      }
      toast({
        description: isAdmin
          ? "✅User created successfully!"
          : "✅Registered successfully!",
      });
    }
  }, [loading, navigate, toast, isAdmin, setIsOpen]);
  useEffect(() => {
    if (loading === "failed") {
      errors.forEach((error) => {
        if (error.type === "validation") {
          form.setError(error.field, { message: error.message });
        }
      });
    }
  }, [errors, form, loading]);
  function onSubmit(values) {
    dispatch(createUser(values));
  }
  return (
    <div
      className={cn(
        "max-w-96 w-full px-2 py-3 md:px-5 md:py-7 border rounded-md mx-auto mt-5 ",
        {
          "max-h-[70vh] overflow-auto": isAdmin,
        }
      )}
    >
      <h1 className="font-bold mb-2 text-3xl text-center">Register</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Phone" type="phone" {...field} />
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
                  <PasswordInput field={field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="passwordConfirm"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <PasswordInput field={field} placeholder="Confirm Password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {isAdmin && (
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a Role" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="user">User</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
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
              <>{isAdmin ? "Create User" : "Register"}</>
            )}
          </Button>
        </form>
      </Form>
      {!isAdmin && (
        <>
          <Separator className="my-5" />
          <p className="text-center text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary hover:text-yellow-300 transition-colors duration-300"
            >
              Login
            </Link>{" "}
            Now.
          </p>
        </>
      )}
    </div>
  );
}

export default RegisterForm;
