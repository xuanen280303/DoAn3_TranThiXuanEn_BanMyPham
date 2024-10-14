import { Navigate, useLocation } from "react-router-dom";
const CheckToken = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  let location = useLocation();
  if (user && user.access_token) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default CheckToken;
