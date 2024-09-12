import AppLayout from "@/Layouts/AppLayout";
import LoginLayout from "@/Layouts/LoginLayout";
import Error from "@/pages/Error";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { store } from "@/store";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
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
  {
    path: "/",
    loader: async ({ request }) => {
      const pathname = new URL(request.url).pathname;

      let isRehydrated = store.getState().auth._persist.rehydrated;
      while (!isRehydrated) {
        isRehydrated = await store.getState().auth._persist.rehydrated;
      }
      const user = store.getState().auth.user;
      if (pathname === "/login" && user) return redirect("/");
      if (pathname === "/register" && user?.role !== "admin")
        return redirect("/");
      return null;
    },
    element: <LoginLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
function AppRouter() {
  return <RouterProvider router={browserRouter} />;
}

export default AppRouter;
