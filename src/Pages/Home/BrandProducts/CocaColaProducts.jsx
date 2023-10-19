import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import Advertisements from "../../../Components/Advertisements";

const CocaColaProducts = () => {
  const allProducts = useLoaderData();
  console.log(allProducts);
  const [cocaColaProducts, setCocaColaProducts] = useState("");
  console.log(cocaColaProducts);
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
        {cocaColaProducts &&
          cocaColaProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CocaColaProducts;
