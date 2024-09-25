import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import User, { loader as userLoader } from "./pages/User";
import UserDetail, { loader as userDetailLoader } from "./pages/UserDetail";
import AppLayout from "./pages/AppLayout";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user",
        element: <User />,
        loader: userLoader,
      },
      {
        path: "/user/:id",
        element: <UserDetail />,
        loader: userDetailLoader
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
