import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from '../../context'

export const RequireAuth = () => {
    let { isAuthenticated }  = useAuth();
    let location = useLocation();
  
    if (isAuthenticated) {
      return <Outlet/>;
    } else {
  
      return <Navigate to="login" state={{ from: location }} />;
    }
}

