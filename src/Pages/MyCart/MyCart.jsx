import { useEffect, useState } from "react";
import UseAuth from "../../../Utilities/UseAuth";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../Home/BrandProducts/ProductCard";

const MyCart = () => {
  const allProducts = useLoaderData();
  const { user } = UseAuth();
  const [userProducts, setUserProducts] = useState([]);
  useEffect(() => {
    const remainingProducts = allProducts.filter(
      (product) => product.userEmail === user.email
    );
    setUserProducts(remainingProducts);
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto my-32">
      {userProducts.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default MyCart;
