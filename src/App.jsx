//react-router-dom
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
//layouts
import MainLayout from "./layouts/MainLayout";

//context
import { useContext, useEffect } from "react";
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
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";

//actions
import { action as SignupAction } from "./pages/Signup";
import { action as LoginAction } from "./pages/Login";
function App() {
  const { user, dispatch } = useContext(GlobalContext);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
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
      action: LoginAction,
    },
    {
      path: "/signup",
      element: user ? <Navigate to="/" /> : <Signup />,
      action: SignupAction,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOG_IN", payload: user });
      dispatch({ type: "AUTH_READY" });
    });
  }, []);
  return <> {<RouterProvider router={routes} />}</>;
}

export default App;
