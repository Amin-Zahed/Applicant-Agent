import useLogin from "@/stores/useLogin";
import { Navigate } from "react-router-dom";

import { ReactNode } from "react";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { isLogin } = useLogin();

  return <>{isLogin ? children : <Navigate to="/Applicant-Agent" />}</>;
};

export default PrivateRoute;
