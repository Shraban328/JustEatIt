import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";

const Brands = () => {
  const brands = useLoaderData();
  return (
    <div className="max-w-screen-lg mx-auto my-20">
      <h1 className="text-4xl font-bold">Where do you want to eat from?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {brands.map((brand) => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default Brands;
