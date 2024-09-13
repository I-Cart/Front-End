import GalleryProductCard from "./GalleryProductCard";
import { useSelector } from "react-redux";


export default function ProductsGallery() {
    const productsArray = useSelector((state) => state.products.products);
    return(
        <div className="justify-center justify-items-center grid md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 sm:grid-cols-2 grid-cols-1 gap-2 p-3">
            {productsArray.map((product) => (
            <GalleryProductCard product={product} key={product.id} />
        ))}
        </div>
    )

}