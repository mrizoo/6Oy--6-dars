//react-router-dom
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
//layouts
import MainLayout from "./layouts/MainLayout";

//context
import { useContext } from "react";
import { GlobalContext } from "./context/useGlobal";

//components
import ProtectedRoutes from "./components/ProtectedRoutes";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
function App() {
  const user = useContext(GlobalContext);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user.user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
