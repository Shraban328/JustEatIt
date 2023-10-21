import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import UseAuth from "../../../../Utilities/UseAuth";
import toast, { Toaster } from "react-hot-toast";

const ProductDetails = () => {
  const { user } = UseAuth();
  const { email: userEmail } = user;
  const [product, setProduct] = useState("");
  const { image, name, brandName, type, price, shortDescription, rating } =
    product;
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const handleAddToCart = () => {
    const newProduct = {
      userEmail,
      image,
      name,
      brandName,
      type,
      price,
      shortDescription,
      rating,
    };
    fetch("http://localhost:5000/carts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged === true) toast.success("Added To Cart!");
      });
  };
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            <span className="font-medium">Brand: </span>
            {brandName}
          </p>
          <div className="w-1/2 text-justify space-y-2">
            <p>
              <span className="font-medium">Type: </span>
              {type}
            </p>
            <p>
              <span className="font-medium">Price:</span> {price}$
            </p>
            <p>
              <span className="font-medium">Description: </span>
              {shortDescription}
            </p>
            <p>
              <span className="font-medium">Rating: </span> {rating}
            </p>
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={handleAddToCart}
              className="btn bg-[#FFDA77] border-none"
            >
              Add To Cart
            </button>
            <Link className="btn bg-[#FFDA77] border-none">Update</Link>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ProductDetails;
