import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../Shop/SingleBook";
import DasboardLayout from "../Dasboard/DasboardLayout";
import Dasboard from "../Dasboard/Dasboard";
import UploadBook from "../Dasboard/UploadBook";
import ManageBook from "../Dasboard/ManageBook";
import EditBook from "../Dasboard/EditBook";
import SignUp from "../components/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/book/:id",
        element: <SingleBook />,
        // loader: ({ params }) => fetch(`https://localhost:5000/book/${params.id}`),
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DasboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dasboard />,
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadBook />,
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageBook />,
      },
      {
        path: "/admin/dashboard/edit-book/:id",
        element: <EditBook />,
        // loader: ({ params }) => fetch(`https://localhost:5000/book/${params.id}`),
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />
  }
]);

export default router;
