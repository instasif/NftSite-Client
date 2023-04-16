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
import UploadNftPage from "../../Pages/UploadNftPage/UploadNftPage";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";

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
        element: <SellerForm />,
      },
      {
        path: "/allnfts",
        element: <AllNfts />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "uploadNfts",
        element: <UploadNftPage />,
      },
    ],
  },
]);

export default router;
