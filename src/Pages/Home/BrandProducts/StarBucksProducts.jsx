import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Advertisements from "../../../Components/Advertisements";
import ProductCard from "./ProductCard";

const StarBucksProducts = () => {
  const allProducts = useLoaderData();
  const [starbucksProducts, setStarbucksProducts] = useState("");
  useEffect(() => {
    const sortedProducts = allProducts.filter(
      (product) => product.brandName === "starbucks"
    );
    setStarbucksProducts(sortedProducts);
  }, [allProducts]);
  return (
    <div>
      <Advertisements />
      <div className="max-w-screen-xl mx-auto space-y-6 mt-6">
        {starbucksProducts.length > 0 ? (
          starbucksProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <>
            <div className="h-screen flex items-center justify-center ">
              <p className="text-4xl font-bold">Opps! No Items Available</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default StarBucksProducts;
