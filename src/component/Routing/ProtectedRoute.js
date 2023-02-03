import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ cookies, redirectPath = "/signin", children }) => {
  if (cookies?.loginToken == undefined) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
