import { useSelector } from "react-redux";

export const useAuth = () => {
  const { accessToken, userLogin } = useSelector(
    (state) => state.userManagement
  );
  return {
    accessToken,
    userLogin,
  };
};
