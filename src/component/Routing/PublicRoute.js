import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = ({ cookies, redirectPath = "/", children }) => {
  if (cookies?.loginToken !== undefined) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default PublicRoute;
