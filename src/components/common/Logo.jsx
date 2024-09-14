import { cn } from "@/lib/utils";

function Logo({ className }) {
  return (
    <img src="/assets/logo.png" className={cn("size-20", className)} alt="" />
  );
}

export default Logo;
