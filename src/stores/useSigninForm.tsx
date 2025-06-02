import { create } from "zustand";

interface UseSigninForm {
  //   isLogin: boolean;
  //   setIsLogin: (isLogin: boolean) => void;
}

const useSigninForm = create<UseSigninForm>((set) => ({
  //   isLogin: false,
  //   setIsLogin: (isLogin) => {
  //     {
  //       set(() => ({ isLogin: isLogin }));
  //     }
  //   },
}));

export default useSigninForm;
