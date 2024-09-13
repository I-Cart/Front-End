import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ReusableButton from "./ReusableButton";
import { Link } from "react-router-dom";
import ReusableBadge from "./ReusableBadge";

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
        <img src={img} alt="" className=" rounded-md" />
      </CardContent>
      <CardFooter className=" flex items-end gap-5">
        <Link to={`/${id}`}>
          <ReusableButton>Order Now !</ReusableButton>
        </Link>
        <ReusableBadge>{price} $</ReusableBadge>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
