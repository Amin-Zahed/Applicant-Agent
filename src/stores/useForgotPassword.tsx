import ForgotPassword from "@/Pages/forgotPassword/ForgotPassword";
import { create } from "zustand";

interface UseForgotPassword {
  forgotPasswordInputValue: string | null | undefined;
  sendRequestVerificationCode: boolean;
  sendVerifyCode: boolean;
  changePasswordButtonEnabled: boolean;
  setForgotPasswordInputValue: (value: string | null | undefined) => void;
  setSendRequestVerificationCode: (
    sendRequestVerificationCode: boolean
  ) => void;
  setSendVerifyCode: (sendVerifyCode: boolean) => void;
  setChangePasswordButtonEnabled: (
    changePasswordButtonEnabled: boolean
  ) => void;
}

const usernameRegex: RegExp = /^[A-Za-z0-9._\-\+]{3,}$/;
const emailRegex: RegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const useForgotPassword = create<UseForgotPassword>((set) => ({
  forgotPasswordInputValue: null,
  sendRequestVerificationCode: false,
  sendVerifyCode: false,
  changePasswordButtonEnabled: false,

  setForgotPasswordInputValue: (value) => {
    if (value && (usernameRegex.test(value) || emailRegex.test(value))) {
      set({ forgotPasswordInputValue: value });
    } else if (value && !usernameRegex.test(value) && !emailRegex.test(value)) {
      set({ forgotPasswordInputValue: undefined });
    } else {
      set({ forgotPasswordInputValue: null });
    }
  },
  setSendRequestVerificationCode: (sendRequestVerificationCode) =>
    set({ sendRequestVerificationCode }),
  setSendVerifyCode: (sendVerifyCode) => set({ sendVerifyCode }),
  setChangePasswordButtonEnabled: (changePasswordButtonEnabled) =>
    set({ changePasswordButtonEnabled }),
}));

export default useForgotPassword;
