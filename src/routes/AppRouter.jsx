import AppLayout from "@/Layouts/AppLayout";
import LoginLayout from "@/Layouts/LoginLayout";
import Error from "@/pages/Error";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import authLoader from "./loaders/authLoader";
import Cart from "@/pages/Cart";
import ProductPage from "@/pages/ProductPage";
import Gallery from "@/pages/Gallery";
import AboutUs from "@/pages/AboutUs";
const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/:id",
        element: <ProductPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      {
        path: "/login",
        loader: authLoader(["guest"]),
        element: <Login />,
      },
      {
        path: "/register",
        loader: authLoader(["guest", "admin"]),
        element: <Register />,
      },
    ],
  },
]);
function AppRouter() {
  return <RouterProvider router={browserRouter} />;
}

export default AppRouter;
