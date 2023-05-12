import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import Sciences from "./pages/Sciences";
import Entertainment from "./pages/Entertainment";

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
      path: "/technology",
      element: <Technology />,
    },
    {
      path: "/sciences",
      element: <Sciences />,
    },
    {
      path: "/entertainment",
      element: <Entertainment />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
