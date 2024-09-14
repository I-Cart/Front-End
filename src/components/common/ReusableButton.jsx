import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function ReusableButton({ children, variant = "default", onClick, className }) {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      className={cn(
        `font-bold hover:bg-cyan-50 hover:text-primary transition-all duration-300 `,
        className
      )}
    >
      {children}
    </Button>
  );
}

export default ReusableButton;
