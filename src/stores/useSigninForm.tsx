import { create } from "zustand";

interface UseSigninForm {
  forgotPasswordInputValue: string | null;
  setForgotPasswordInputValue: (
    forgotPasswordInputValue: string | null
  ) => void;
}

const useSignupForm = create<UseSigninForm>((set) => ({
  forgotPasswordInputValue: null,
  setForgotPasswordInputValue: (forgotPasswordInputValue) =>
    set({ forgotPasswordInputValue }),
}));

export default useSignupForm;
