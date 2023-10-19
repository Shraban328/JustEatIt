import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Advertisements from "../../../Components/Advertisements";
import ProductCard from "./ProductCard";

const NestleProducts = () => {
  const allProducts = useLoaderData();
  const [nestleProducts, setNestleProducts] = useState("");
  useEffect(() => {
    const sortedProducts = allProducts.filter(
      (product) => product.brandName === "mcdonalds"
    );
    setNestleProducts(sortedProducts);
  }, [allProducts]);
  return (
    <div>
      <Advertisements />
      <div className="max-w-screen-xl mx-auto space-y-6 mt-6">
        {nestleProducts.length > 0 ? (
          nestleProducts.map((product) => (
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
export default NestleProducts;
