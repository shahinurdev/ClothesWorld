/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuh";
import LoadingSpinner from "../../components/LoadingSpinner";


const PrivateRoute = ({children}) => {
   const {user, loading} = useAuth();
   const location = useLocation()
   if(loading){
    return <LoadingSpinner></LoadingSpinner>
   }
   if(user){
    return children;
   }
   return <Navigate to={"/login"} state= {{from:location}}></Navigate>
};

export default PrivateRoute;