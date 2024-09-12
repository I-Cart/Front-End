import { cn } from "@/lib/utils";

function Logo({ className }) {
  return (
    <span
      className={cn(
        "select-none bg-primary text-white rounded px-2 py-1 md:text-2xl xl:text-4xl ",
        className
      )}
    >
      <span className="text-yellow-300">e</span>Cart
    </span>
  );
}

export default Logo;
