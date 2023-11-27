/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Component/Hooks/useAuth";
import Loader from "../Component/Shared/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation()

  // we have to wait here
  if (loading) return <Loader />;
  //

  if (!user) {
    return <Navigate to="/sign-in" state={{from: location}} replace />;
  }

  return children;
};

export default PrivateRoute;
