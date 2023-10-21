import { useEffect, useState } from "react";
import UseAuth from "../../../Utilities/UseAuth";
import { useLoaderData } from "react-router-dom";

const MyCart = () => {
  const allProducts = useLoaderData();
  console.log(allProducts);
  const { user } = UseAuth();
  const [userProducts, setUserProducts] = useState([]);
  useEffect(() => {
    const remainingProducts = allProducts.filter(
      (product) => product.userEmail === user.email
    );
    setUserProducts(remainingProducts);
  }, []);
  console.log("userProducts: ", userProducts);
  return (
    <div>
      <h1>cart</h1>
    </div>
  );
};

export default MyCart;
