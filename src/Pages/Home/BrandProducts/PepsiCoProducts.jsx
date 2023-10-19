import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Advertisements from "../../../Components/Advertisements";
import ProductCard from "./ProductCard";

const PepsiCoProducts = () => {
  const allProducts = useLoaderData();
  const [pepsicoProducts, setPepsicoProducts] = useState("");
  console.log(pepsicoProducts);
  useEffect(() => {
    const sortedProducts = allProducts.filter(
      (product) => product.brandName === "pepsico"
    );
    setPepsicoProducts(sortedProducts);
  }, [allProducts]);
  return (
    <div>
      <Advertisements />
      <div className="max-w-screen-xl mx-auto space-y-6 mt-6">
        {pepsicoProducts.length > 0 ? (
          pepsicoProducts.map((product) => (
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
export default PepsiCoProducts;
