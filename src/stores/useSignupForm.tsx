import { create } from "zustand";
import { ChangeEvent } from "react";

interface SignupFormDatas {
  username: string | null | undefined;
  email: string | null | undefined;
  password: string | null | undefined;
}

interface PasswordRegexes {
  number: RegExp;
  lowercase: RegExp;
  uppercase: RegExp;
  specialChar: RegExp;
}

interface UseSignupForm {
  signupFormDatas: SignupFormDatas;
  signupFormInputsHandler: (
    e: ChangeEvent<HTMLInputElement>,
    regex: RegExp
  ) => void;
  passwordHasANumber: boolean;
  passwordHasALowercase: boolean;
  passwordHasAUppercase: boolean;
  passwordHasASpecialChar: boolean;
  passwordRegexes: PasswordRegexes;
  passwordInputChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  confirmPassword: string | null | undefined;
  confirmPasswordInputHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  confirmPasswordInputValue: string | null;
  checkboxChecked: boolean;
  setCheckboxChecked: (checked: boolean) => void;
}

const initialSignupFormDatas: SignupFormDatas = {
  username: null,
  email: null,
  password: null,
};

const passwordRegexes: PasswordRegexes = {
  number: /(?=.*\d)/,
  lowercase: /(?=.*[a-z])/,
  uppercase: /(?=.*[A-Z])/,
  specialChar: /(?=.*[!@#$%^&*()[\]{}\-_=+|;:'",.<>/?\\`~])/,
};

const useSignupForm = create<UseSignupForm>((set) => ({
  signupFormDatas: initialSignupFormDatas,

  signupFormInputsHandler: (e, regex) => {
    const { name, value } = e.target;
    if (value === "") {
      set((state) => ({
        signupFormDatas: { ...state.signupFormDatas, [name]: null },
      }));
    } else if (regex.test(value)) {
      set((state) => ({
        signupFormDatas: { ...state.signupFormDatas, [name]: value },
      }));
    } else {
      set((state) => ({
        signupFormDatas: { ...state.signupFormDatas, [name]: undefined },
      }));
    }
  },

  passwordHasANumber: false,
  passwordHasALowercase: false,
  passwordHasAUppercase: false,
  passwordHasASpecialChar: false,

  passwordRegexes,

  passwordInputChangeHandler: (e) => {
    const { value } = e.target;
    set(() => ({
      passwordHasANumber: passwordRegexes.number.test(value),
      passwordHasALowercase: passwordRegexes.lowercase.test(value),
      passwordHasAUppercase: passwordRegexes.uppercase.test(value),
      passwordHasASpecialChar: passwordRegexes.specialChar.test(value),
    }));
    if (typeof useSignupForm.getState().confirmPassword === "string") {
      set(() => ({ confirmPassword: undefined }));
    } else if (
      typeof useSignupForm.getState().signupFormDatas.password === "string" &&
      value === useSignupForm.getState().confirmPasswordInputValue
    ) {
      set(() => ({ confirmPassword: value }));
    }
  },

  confirmPassword: null,
  confirmPasswordInputValue: null,

  confirmPasswordInputHandler: (e) => {
    const { value } = e.target;
    useSignupForm.getState().confirmPasswordInputValue = value;
    if (value === "") {
      set(() => ({ confirmPassword: null }));
    } else if (
      typeof useSignupForm.getState().signupFormDatas.password === "string" &&
      value === useSignupForm.getState().signupFormDatas.password
    ) {
      set(() => ({ confirmPassword: value }));
    } else {
      set(() => ({ confirmPassword: undefined }));
    }
  },

  checkboxChecked: false,
  setCheckboxChecked: (checked) => set(() => ({ checkboxChecked: checked })),
}));

export default useSignupForm;
