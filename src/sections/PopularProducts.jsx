import { products } from "../constants";
import PopularProductsCard from "../components/PopularProductsCard";

export default function PopularProducts() {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col gap-5 justify-start">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="font-montserrat text-slate-gray mt-2 lg:max-w-lg">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world comfort, design, and value{" "}
        </p>
      </div>
      <div className="grid mt-16 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 gap-14 grid-cols-1 ">
        {products.map((product) => (
          <PopularProductsCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
}
