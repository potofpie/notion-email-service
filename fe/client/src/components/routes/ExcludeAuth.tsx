import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from '../../context'

export const ExcludeAuth = () => {
  let { isAuthenticated }  = useAuth();
  let location = useLocation();

  if (!isAuthenticated) {
    return <Outlet/>;
  } else {

    return <Navigate to="/" state={{ from: location }} />;
  }
}