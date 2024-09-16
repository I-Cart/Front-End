import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function BackToHomeOnLogout({ children }) {
  const user = useSelector((state) => state.auth.user);
  if (user == null) return <Navigate to={"/"} replace />;
  return children;
}

export default BackToHomeOnLogout;
