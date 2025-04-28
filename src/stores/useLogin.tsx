import { create } from "zustand";

interface UseLogin {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
}

const useLogin = create<UseLogin>((set) => ({
  isLogin: false,
  setIsLogin: (isLogin) => {
    {
      set(() => ({ isLogin: isLogin }));
    }
  },
}));

export default useLogin;
