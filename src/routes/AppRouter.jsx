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
import Checkout from "@/pages/Checkout";
import Orders from "@/pages/Orders";
import Dashboard from "@/pages/Dashboard";
import BackToHomeOnLogout from "@/components/common/BackToHomeOnLogout";
import NotFound from "@/pages/NotFound";
import ContactForm from "@/pages/ContactUs";
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
      {
        path: "/check-out",
        element: (
          <BackToHomeOnLogout>
            <Checkout />
          </BackToHomeOnLogout>
        ),
        loader: authLoader(["user", "admin"]),
      },
      {
        path: "/orders",
        loader: authLoader(["user", "admin"]),
        element: (
          <BackToHomeOnLogout>
            <Orders />
          </BackToHomeOnLogout>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <BackToHomeOnLogout>
            <Dashboard />
          </BackToHomeOnLogout>
        ),
        loader: authLoader(["admin"]),
      },
      {
        path: "/contact-us",
        element: <ContactForm />,
        loader: authLoader(["user", "guest"]),
      },
      {
        path: "*",
        element: <NotFound />,
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
        loader: authLoader(["guest"]),
        element: <Register />,
      },
    ],
  },
]);
function AppRouter() {
  return <RouterProvider router={browserRouter} />;
}

export default AppRouter;
