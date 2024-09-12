import { Badge } from "@/components/ui/badge";

function ReusableBadge({ children, size }) {
  return (
    <Badge variant="outline" className={`${size ? `text-[${size}px]` : ""}`}>
      <p className=" text-[hsl(var(--primary))]">{children}</p>
    </Badge>
  );
}

export default ReusableBadge;
