import { create } from "zustand";

interface UseForgotPassword {
  forgotPasswordInputValue: string | readonly string[] | number | undefined;
  sendRequestVerificationCode: boolean;
  inputOptIsValid: boolean;
  sendVerifyCode: boolean;
  changePasswordButtonEnabled: boolean;
  setForgotPasswordInputValue: (
    value: string | readonly string[] | number | undefined
  ) => void;
  setSendRequestVerificationCode: (
    sendRequestVerificationCode: boolean
  ) => void;
  setInputOptIsValid: (value: boolean) => void;
  setSendVerifyCode: (sendVerifyCode: boolean) => void;
  setChangePasswordButtonEnabled: (
    changePasswordButtonEnabled: boolean
  ) => void;
}

const usernameRegex: RegExp = /^[A-Za-z0-9._\-\+]{3,}$/;
const emailRegex: RegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const useForgotPassword = create<UseForgotPassword>((set) => ({
  forgotPasswordInputValue: undefined,
  sendRequestVerificationCode: false,
  inputOptIsValid: false,
  sendVerifyCode: false,
  changePasswordButtonEnabled: false,

  setForgotPasswordInputValue: (value) => {
    if (
      value &&
      (usernameRegex.test(String(value)) || emailRegex.test(String(value)))
    ) {
      set({ forgotPasswordInputValue: value });
    } else if (
      value &&
      !usernameRegex.test(String(value)) &&
      !emailRegex.test(String(value))
    ) {
      set({ forgotPasswordInputValue: undefined });
    } else {
      set({ forgotPasswordInputValue: undefined });
    }
  },
  setSendRequestVerificationCode: (sendRequestVerificationCode) =>
    set({ sendRequestVerificationCode }),
  setInputOptIsValid: (value) => set(() => ({ inputOptIsValid: value })),
  setSendVerifyCode: (sendVerifyCode) => set({ sendVerifyCode }),
  setChangePasswordButtonEnabled: (changePasswordButtonEnabled) =>
    set({ changePasswordButtonEnabled }),
}));

export default useForgotPassword;
