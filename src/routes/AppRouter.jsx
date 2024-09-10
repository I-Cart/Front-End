import AppLayout from "@/Layouts/AppLayout";
import Error from "@/pages/Error";
import Home from "@/pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
    ],
  },
]);
function AppRouter() {
  return <RouterProvider router={browserRouter} />;
}

export default AppRouter;
