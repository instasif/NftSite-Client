import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../Pages/Home/Home";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Signup from "../../Pages/Signup/Signup";
import Login from "../../Pages/Login/Login";
import NftDetails from "../../Pages/NftDetails/NftDetails";
import AllNfts from "../../Pages/AllNfts/AllNfts";
import SellerForm from "../../Pages/SellerForm/SellerForm";
import ErrorPage from "../../shared/ErrorPage/ErrorPage";
import DashboardLayout from "../../layouts/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "details/:id",
        element: <NftDetails />,
      },
      {
        path: "/allNfts",
        element: <AllNfts />,
      },
      {
        path: "/sellerForm",
        element: <SellerForm />
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/allnfts",
    element: <AllNfts />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
        <DashboardLayout />
    ),
  },
]);

export default router;
