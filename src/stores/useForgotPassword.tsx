import { create } from "zustand";

interface UseForgotPassword {
  forgotPasswordInputValue: string | null;
  setForgotPasswordInputValue: (
    forgotPasswordInputValue: string | null
  ) => void;
  sendRequestVerificationCode: boolean;
  setSendRequestVerificationCode: (
    sendRequestVerificationCode: boolean
  ) => void;
  sendVerifyCode: boolean;
  setSendVerifyCode: (sendVerifyCode: boolean) => void;
}

const useSignupForm = create<UseForgotPassword>((set) => ({
  forgotPasswordInputValue: null,
  setForgotPasswordInputValue: (forgotPasswordInputValue) =>
    set({ forgotPasswordInputValue }),

  sendRequestVerificationCode: false,
  setSendRequestVerificationCode: (sendRequestVerificationCode) =>
    set({ sendRequestVerificationCode }),

  sendVerifyCode: false,
  setSendVerifyCode: (sendVerifyCode) => set({ sendVerifyCode }),
}));

export default useSignupForm;
