import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

function App() {
  const Layout = () => {
    return (
      <>
        <Outlet />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <SignIn />,
        },
        {
          path: "/sign-up",
          element: <SignUp />,
        },
      ],
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/:user",
      element: <Home />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
