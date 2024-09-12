import { useState } from "react";
import { Input } from "../ui/input";
import { Eye } from "lucide-react";
import { cn } from "@/lib/utils";

function PasswordInput({ placeholder = "Password", field }) {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  return (
    <div className="relative select-none">
      <Input
        placeholder={placeholder}
        type={isPasswordShown ? "text" : "password"}
        {...field}
      />
      <Eye
        className={cn(
          "absolute -translate-y-1/2 right-3 hover:text-primary transition-colors duration-300 top-1/2 text-gray-400 cursor-pointer",
          {
            "text-primary": isPasswordShown,
          }
        )}
        onClick={(e) => {
          e.stopPropagation();
          setIsPasswordShown((prev) => !prev);
        }}
      />
    </div>
  );
}

export default PasswordInput;
