import { useNavigate } from "react-router-dom";

function ProtectedRoutes({ children, user }) {
  const navigate = useNavigate();
  if (user) {
    return children;
  } else {
    return navigate("/signup");
  }
}

export default ProtectedRoutes;
