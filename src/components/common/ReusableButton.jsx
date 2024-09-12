import { Button } from "@/components/ui/button";

function ReusableButton({ children, variant = "default" }) {
  return (
    <Button
      variant={variant}
      className="font-bold hover:bg-cyan-50 hover:text-[hsl(var(--primary))] transition-all duration-300 "
    >
      {children}
    </Button>
  );
}

export default ReusableButton;
