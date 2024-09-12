import ProductToBuy from "@/components/product/ProductToBuy";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  return <ProductToBuy id={id} />;
}

export default ProductPage;
