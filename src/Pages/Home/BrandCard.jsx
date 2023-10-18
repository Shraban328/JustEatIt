import PropTypes from "prop-types";
const BrandCard = ({ brand }) => {
  const { company_name, company_image } = brand;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl rounded-full">
        <figure className="px-10 pt-10">
          <img
            src={company_image}
            alt="logo"
            className="rounded-full w-11/12"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{company_name}</h2>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;

BrandCard.propTypes = {
  brand: PropTypes.object,
};
