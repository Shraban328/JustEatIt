import { Navigate } from "react-router-dom";
import UseAuth from "../../Utilities/UseAuth";
import PropTypes from "prop-types";
const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  if (loading) {
    return (
      <div className="max-w-screen-2xl mx-auto">
        <span className="loading loading-ball loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
