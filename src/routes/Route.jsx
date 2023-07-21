import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import RoomDetails from "../pages/RoomDetails/RoomDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      }
      ,
      {
        path: '/room/:id',
        element: (
          <PrivateRoute>
            <RoomDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/login',
    element:<Login></Login>
  },
  {
    path:'/signup',
    element: <SignUp></SignUp>
  }
]);
