import PropTypes from "prop-types";
const FeaturesCard = ({ feature }) => {
  const { image, title, description } = feature;
  return (
    <div className="card w-3/4 md:w-96 bg-base-100 mx-auto">
      <figure className="md:px-10 pt-10">
        <img src={image} alt="feature" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center ">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
FeaturesCard.propTypes = {
  feature: PropTypes.object,
};
