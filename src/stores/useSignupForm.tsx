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
  //   setSignupFormDatas: (data: SignupFormDatas) => void;
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

  //   setSignupFormDatas: (data) => set(() => ({ signupFormDatas: data })),

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
  },

  confirmPassword: null,

  confirmPasswordInputHandler: (e) => {
    if (e.target.value === "") {
      set(() => ({ confirmPassword: null }));
    } else if (
      typeof useSignupForm.getState().signupFormDatas.password === "string" &&
      e.target.value === useSignupForm.getState().signupFormDatas.password
    ) {
      set(() => ({ confirmPassword: e.target.value }));
    } else {
      set(() => ({ confirmPassword: undefined }));
    }
  },
}));

export default useSignupForm;
