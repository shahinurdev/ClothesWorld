import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Abouts from "../pages/Abouts";
import ErrorPages from "../pages/ErrorPages";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./private/PrivateRoute";
import DashboardLayout from "../layout/DashboardLayout";
import ClothesDetails from './../pages/ClothesDetails';
import AllClothes from "../pages/AllClothes";
import AddClothe from "../pages/AddClothe";
import EditProducrs from "../pages/EditProducrs";
import EditUserProfile from "../pages/EditUserProfile";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      errorElement: <ErrorPages></ErrorPages>,
      children:[
        {
            path: "/",
            element:<Home/>,
            loader: ()=> fetch("https://serverclothesworld.onrender.com/clothes")
        },
        {
          path: "/clothes/:id",
          element:<ClothesDetails></ClothesDetails>,
          loader: ({params})=> fetch(`https://serverclothesworld.onrender.com/clothes/${params.id}`)
      },
        {
            path: "/about",
            element:<Abouts></Abouts>
        },
        {
            path: "/login",
            element:<Login></Login>
        },
        {
            path: "/registration",
            element:<Registration></Registration>
        },
      ]
    },
    {
      path: "dashboard",
      element:<DashboardLayout></DashboardLayout>,
      errorElement: <ErrorPages></ErrorPages>,
      children: [
      {
                path:"",
                element:(<PrivateRoute>
                  <Dashboard></Dashboard>
                </PrivateRoute>)
                
    },
      {
                path:"profile/edit/:id",
                element:(<PrivateRoute>
                <EditUserProfile></EditUserProfile>
                </PrivateRoute>) ,
                loader: ({params})=> fetch(`https://serverclothesworld.onrender.com/user/get/${params.id}`),   
                           
    },
    
      {
                path:"all-clothes",
                element:(<PrivateRoute>
                 <AllClothes></AllClothes>
                </PrivateRoute>)
                
    },
      {
                path:"add-clothe",
                element:(<PrivateRoute>
                      <AddClothe></AddClothe>
                </PrivateRoute>)
                
    },
      {
                path:"all-clothes/edit/:id",
                element:(<PrivateRoute>
                   <EditProducrs></EditProducrs>
                </PrivateRoute>),
                 loader: ({params})=> fetch(`https://serverclothesworld.onrender.com/clothes/${params.id}`)          
    },

      ]
  },
  ]); 