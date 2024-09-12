import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import ProductCard from "./ProductCard";

function CarouselSlider({ productsArray, carouselName }) {
  return (
    <div className="max-w-[90%] my-[40px] mx-auto">
      <div className=" mb-[20px]">
        <h2 className=" text-[hsl(var(--primary))] font-bold">
          {carouselName}
        </h2>
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {productsArray.map((product) => (
            <CarouselItem
              className="md:basis-1/2 lg:basis-1/3"
              key={product.id}
            >
              <ProductCard product={product} key={product.id} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {productsArray.length > 3 && (
          <CarouselPrevious className="text-[hsl(var(--primary))]" />
        )}
        {productsArray.length > 3 && (
          <CarouselNext className="text-[hsl(var(--primary))]" />
        )}
      </Carousel>
    </div>
  );
}

export default CarouselSlider;
