import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const BrandCard = ({ brand }) => {
  const { company_name, company_image, url } = brand;
  return (
    <div>
      <Link
        to={url}
        className="card col p-5 w-72 h-72 bg-base-100 shadow-xl rounded-full "
      >
        <figure className="p-8  rounded-full flex-grow">
          <img
            src={company_image}
            alt="logo"
            className="w-36 mx-auto hover:scale-110 transition ease-in-out duration-300"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{company_name}</h2>
        </div>
      </Link>
    </div>
  );
};

export default BrandCard;

BrandCard.propTypes = {
  brand: PropTypes.object,
};
