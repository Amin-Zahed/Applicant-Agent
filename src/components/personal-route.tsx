import useLogin from "@/stores/useLogin";
import { Navigate } from "react-router-dom";

import { ReactNode } from "react";

const PersonalRoute = ({ children }: { children: ReactNode }) => {
  const { isLogin } = useLogin();

  return <>{isLogin === false ? children : <Navigate to="/dashboard" />}</>;
};

export default PersonalRoute;
