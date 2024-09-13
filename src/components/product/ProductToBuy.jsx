import { useDispatch, useSelector } from "react-redux";
import ReusableBadge from "../common/ReusableBadge";
import ReusableButton from "../common/ReusableButton";
import { addProduct } from "@/store/cart/cartSlice";
import ProductInCart from "./ProductInCart";

function ProductToBuy({ id }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const targetedProduct = useSelector(
    (state) =>
      state?.products?.products.filter(
        (product) => product.id === Number(id)
      )[0]
  );
  const productInCart = cart.some((cartItem) => cartItem.id === Number(id));
  console.log(productInCart);
  const { cat_prefix, title, price, img, description } = targetedProduct;
  function handleOnClick() {
    dispatch(addProduct(targetedProduct));
    console.log("added");
  }
  return (
    <div className=" mt-[30px] mb-[30px] sm:p-[10px] md:p-[40px] flex flex-col-reverse md:flex-row items-center gap-[20px] mx-auto">
      <div id="info" className="px-8 md:px-0">
        <div className="flex gap-5 items-end">
          <h2 className=" text-[hsl(var(--primary))] text-[25px] md:text-[40px] font-bold">
            {title}
          </h2>
          <ReusableBadge className="text-[hsl(var(--primary))]">
            {cat_prefix}
          </ReusableBadge>
        </div>
        <div className="flex items-center gap-5">
          <h3 className=" text-[25px] font-bold">Price : </h3>
          <ReusableBadge size={18}>{price} $</ReusableBadge>
        </div>
        <div className="text-[hsl(var(--primary))] font-medium max-w-[400px] mt-[30px]">
          Description : {description}
        </div>
        <div className="mt-[40px] ">
          {productInCart ? (
            <ProductInCart />
          ) : (
            <ReusableButton center={true} onClick={handleOnClick}>
              Add to Cart
            </ReusableButton>
          )}
        </div>
      </div>
      <div id="preview" className=" relative  ">
        <img
          src={img}
          alt=""
          className=" rounded-xl max-w-[300px] lg:max-w-[700px] "
        />
        <div className=" absolute top-3 left-3 ">
          <ReusableBadge>Preview</ReusableBadge>
        </div>
      </div>
    </div>
  );
}

export default ProductToBuy;
