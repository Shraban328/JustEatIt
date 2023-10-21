import { Navigate } from "react-router-dom";
import UseAuth from "../../Utilities/UseAuth";
import PropTypes from "prop-types";
const PrivateRoute = ({ children }) => {
  const { user } = UseAuth();
  if (user) {
    return children;
  }

  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
