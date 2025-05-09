import { create } from "zustand";

interface UseForgotPassword {
  forgotPasswordInputValue: string | null;
  sendRequestVerificationCode: boolean;
  sendVerifyCode: boolean;
  changePasswordButtonEnabled: boolean;
  setForgotPasswordInputValue: (
    forgotPasswordInputValue: string | null
  ) => void;
  setSendRequestVerificationCode: (
    sendRequestVerificationCode: boolean
  ) => void;
  setSendVerifyCode: (sendVerifyCode: boolean) => void;
  setChangePasswordButtonEnabled: (
    changePasswordButtonEnabled: boolean
  ) => void;
}

const useForgotPassword = create<UseForgotPassword>((set) => ({
  forgotPasswordInputValue: null,
  sendRequestVerificationCode: false,
  sendVerifyCode: false,
  changePasswordButtonEnabled: false,

  setForgotPasswordInputValue: (forgotPasswordInputValue) =>
    set({ forgotPasswordInputValue }),
  setSendRequestVerificationCode: (sendRequestVerificationCode) =>
    set({ sendRequestVerificationCode }),
  setSendVerifyCode: (sendVerifyCode) => set({ sendVerifyCode }),
  setChangePasswordButtonEnabled: (changePasswordButtonEnabled) =>
    set({ changePasswordButtonEnabled }),
}));

export default useForgotPassword;
