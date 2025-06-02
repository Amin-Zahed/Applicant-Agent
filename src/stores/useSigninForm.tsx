import { create } from "zustand";

interface UseSigninForm {
  usernameInputValue: null | undefined | string;
  passwordInputValue: null | undefined | string;
  setUsernameInputValue: (value: null | undefined | string) => void;
  setPasswordInputValue: (value: null | undefined | string) => void;
}

const usernameRegex: RegExp = /^[A-Za-z0-9._\-\+]{3,}$/;
const passwordRegex: RegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()[\]{}\-_=+|;:'",.<>/?\\`~])[\s\S]{4,}$/;

const useSigninForm = create<UseSigninForm>((set) => ({
  usernameInputValue: null,
  passwordInputValue: null,

  setUsernameInputValue: (value) => {
    if (value && usernameRegex.test(value)) {
      set({ usernameInputValue: value });
    } else if (value && !usernameRegex.test(value)) {
      set({ usernameInputValue: undefined });
    } else {
      set({ usernameInputValue: null });
    }
  },
  setPasswordInputValue: (value) => {
    if (value && passwordRegex.test(value)) {
      set({ passwordInputValue: value });
    } else if (value && !passwordRegex.test(value)) {
      set({ passwordInputValue: undefined });
    } else {
      set({ passwordInputValue: null });
    }
  },
}));

export default useSigninForm;
