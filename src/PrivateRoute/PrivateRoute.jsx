import { Navigate, useNavigate } from "react-router-dom";
import UseAuth from "../../Utilities/UseAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  console.log(loading);
  const navigate = useNavigate();
  console.log(navigate);
  if (loading) {
    return (
      <div className="max-w-screen-2xl mx-auto flex items-center justify-center text-9xl h-screen">
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
