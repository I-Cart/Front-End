import { Link, useLocation } from "react-router-dom";
import ReusableButton from "./ReusableButton";
import { useEffect } from "react";
import CarouselSlider from "./CarouselSlider";
import { useSelector } from "react-redux";

function MainViewSection() {
  const { hash } = useLocation();
  const productsArray = useSelector((state) => state.products.products);
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <>
      <div className="flex justify-between items-center p-10 flex-1">
        <div className="flex flex-col gap-5 items-center">
          <div className="lg:w-[800px] md:w-[400px]  leading-10 border-solid border-4 border-[hsl(var(--primary))] p-10 rounded-lg">
            <span className="text-lg ">
              Welcome to{" "}
              <span className="text-[hsl(var(--primary))] font-bold text-[50px]">
                I-Cart
              </span>{" "}
              It is your first and guaranteed destination for buying clothes.
              There are many clothes that suit your taste and needs. There are
              men’s and women’s clothes, sports clothes, and children’s clothes.
              With a diverse and rich assortment of clothes, we guarantee that
              you have all the high-quality clothes you need. What are you
              waiting for? Order now
            </span>
          </div>
          <div className="flex gap-5">
            <Link to="#order">
              <ReusableButton>Order Now !</ReusableButton>
            </Link>
            <Link>
              <ReusableButton variant="secondary">Contact us</ReusableButton>
            </Link>
          </div>
        </div>
        <div>
          <img
            src="/assets/manInGreen.jpg"
            alt=""
            className=" hidden md:block w-[350px] rounded-md"
          />
        </div>
      </div>
      <div className="text-[50px] p-[40px]" id="order">
        <CarouselSlider
          productsArray={productsArray}
          carouselName={"all products".toUpperCase()}
        />
        <CarouselSlider
          productsArray={productsArray.filter(
            (product) => product.cat_prefix === "men"
          )}
          carouselName={"Men products".toUpperCase()}
        />
        <CarouselSlider
          productsArray={productsArray.filter(
            (product) => product.cat_prefix === "women"
          )}
          carouselName={"Women products".toUpperCase()}
        />
        <CarouselSlider
          productsArray={productsArray.filter(
            (product) => product.cat_prefix === "sport"
          )}
          carouselName={"Sports products".toUpperCase()}
        />
        <CarouselSlider
          productsArray={productsArray.filter(
            (product) => product.cat_prefix === "kids"
          )}
          carouselName={"Kids products".toUpperCase()}
        />
        <CarouselSlider
          productsArray={productsArray.filter(
            (product) => product.cat_prefix === "baby"
          )}
          carouselName={"Baby products".toUpperCase()}
        />
      </div>
    </>
  );
}

export default MainViewSection;
