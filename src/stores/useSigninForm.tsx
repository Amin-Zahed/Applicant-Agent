import { create } from "zustand";

interface UseSigninForm {
  forgotPassword: boolean;
  setForgotPassword: (forgotPassword: boolean) => void;
  forgotPasswordInputValue: string | null;
  setForgotPasswordInputValue: (
    forgotPasswordInputValue: string | null
  ) => void;
}

const useSignupForm = create<UseSigninForm>((set) => ({
  forgotPassword: false,
  setForgotPassword: (forgotPassword) => set({ forgotPassword }),

  forgotPasswordInputValue: null,
  setForgotPasswordInputValue: (forgotPasswordInputValue) =>
    set({ forgotPasswordInputValue }),
}));

export default useSignupForm;
