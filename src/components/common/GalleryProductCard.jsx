import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function ProductsGallery({ product }) {
  const { id, cat_prefix, title, img, price } = product;
  return (
    <Link to={`/${id}`}>
      <Card className="border-none relative group max-w-48 shadow-none">
        <div className="p-3 opacity-0 absolute bg-white/25 backdrop-blur-sm inset-0 group-hover:opacity-100 transition-all duration-300">
          <CardHeader>
            <CardTitle>
              {" "}
              <span className=" text-[hsl(var(--primary))]">{title}</span>
            </CardTitle>
            <CardDescription>
              {" "}
              <span className="text-primary">{cat_prefix}</span>
            </CardDescription>
          </CardHeader>
          <CardFooter className=" flex items-end gap-5">
            <Badge variant="outline">
              <p className=" text-[hsl(var(--primary))]">{price} $</p>
            </Badge>
          </CardFooter>
        </div>

        <CardContent className="flex flex-col h-full">
          <img src={img} alt="" className="rounded-md aspect-[2/3]" />
        </CardContent>
      </Card>
    </Link>
  );
}

export default ProductsGallery;
