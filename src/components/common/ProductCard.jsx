import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ReusableButton from "./ReusableButton";
import { Badge } from "@/components/ui/badge";

function ProductCard({ product }) {
  const { id, cat_prefix, title, img, price } = product;
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {" "}
          <span className=" text-[hsl(var(--primary))]">{title}</span>
        </CardTitle>
        <CardDescription>
          {" "}
          <span>{cat_prefix}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <img
          src={img}
          alt=""
          className=" rounded-md"
          onClick={() => console.log(id)}
        />
      </CardContent>
      <CardFooter className=" flex items-end gap-5">
        <ReusableButton>Order Now !</ReusableButton>
        <Badge variant="outline">
          <p className=" text-[hsl(var(--primary))]">{price} $</p>
        </Badge>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
