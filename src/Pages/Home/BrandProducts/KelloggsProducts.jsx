import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Advertisements from "../../../Components/Advertisements";
import ProductCard from "./ProductCard";

const KelloggsProducts = () => {
  const allProducts = useLoaderData();
  const [kelloggsProducts, setKelloggsProducts] = useState("");
  useEffect(() => {
    const sortedProducts = allProducts.filter(
      (product) => product.brandName === "kelloggs"
    );
    setKelloggsProducts(sortedProducts);
  }, [allProducts]);
  return (
    <div>
      <Advertisements />
      <div className="max-w-screen-xl mx-auto space-y-6 mt-6">
        {kelloggsProducts.length > 0 ? (
          kelloggsProducts.map((product) => (
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

export default KelloggsProducts;
