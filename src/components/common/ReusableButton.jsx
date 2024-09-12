import { Button } from "@/components/ui/button";

function ReusableButton({ children, variant = "default", onClick }) {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      className={`font-bold hover:bg-cyan-50 hover:text-[hsl(var(--primary))] transition-all duration-300 `}
    >
      {children}
    </Button>
  );
}

export default ReusableButton;
