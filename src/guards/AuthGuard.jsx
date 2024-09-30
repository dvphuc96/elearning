import { useAuth } from "hooks";
import { Navigate } from "react-router-dom";

export const AuthGuard = (props) => {
  const { accessToken } = useAuth();
  if (!accessToken) {
    return <Navigate to="/" />;
  }
  return <>{props.children}</>;
};
