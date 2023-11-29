/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import Loader from "../Component/Shared/Loader";
import useRole from "../Component/Hooks/useRole";

const AdminRoute = ({ children }) => {
  const [role, isLoading] = useRole();

  //   we have to wait here
  if (isLoading) return <Loader />;

  if (role === "admin") return children;
  return <Navigate to="/dashboard" />;
};

export default AdminRoute;
