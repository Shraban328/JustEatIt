import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState("");
  const { _id, image, name, brandName, type, price, shortDescription, rating } =
    product;
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
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
            <Link className="btn bg-[#FFDA77] border-none">Add To Cart</Link>
            <Link className="btn bg-[#FFDA77] border-none">Update</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
