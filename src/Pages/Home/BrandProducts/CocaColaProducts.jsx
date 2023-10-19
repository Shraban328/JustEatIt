import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import Advertisements from "../../../Components/Advertisements";

const CocaColaProducts = () => {
  const allProducts = useLoaderData();
  const [cocaColaProducts, setCocaColaProducts] = useState("");
  useEffect(() => {
    const sortedProducts = allProducts.filter(
      (product) => product.brandName === "coca cola"
    );
    setCocaColaProducts(sortedProducts);
  }, [allProducts]);
  return (
    <div>
      <Advertisements />
      <div className="max-w-screen-xl mx-auto space-y-6 mt-6">
        {cocaColaProducts.length > 0 ? (
          cocaColaProducts.map((product) => (
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

export default CocaColaProducts;
