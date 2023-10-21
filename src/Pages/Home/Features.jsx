import { useEffect, useState } from "react";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/features")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 max-w-screen-xl mx-auto my-32">
      {features.map((feature) => (
        <FeaturesCard key={feature._id} feature={feature} />
      ))}
    </div>
  );
};

export default Features;
