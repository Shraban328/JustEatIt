import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const ProductCard = ({ product }) => {
  const { _id, image, name, brandName, type, price, shortDescription, rating } =
    product;
  return (
    <div data-aos="zoom-in" className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Movie" className="w-4/6" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{brandName}</p>
        <div className="w-1/2 text-justify space-y-2">
          <p>{type}</p>
          <p>
            <span className="font-medium">Price:</span> {price}$
          </p>
          <p>{shortDescription}</p>
          <p>
            <span className="font-medium">Rating: </span> {rating}
          </p>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/product/${_id}`} className="btn bg-[#FFDA77] border-none">
            Details
          </Link>
          <Link className="btn bg-[#FFDA77] border-none">Update</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
ProductCard.propTypes = {
  product: PropTypes.object,
};
