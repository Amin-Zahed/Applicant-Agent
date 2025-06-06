import { create } from "zustand";
import { ChangeEvent } from "react";

interface SignupFormDatas {
  username: string | readonly string[] | number | undefined | null;
  email: string | readonly string[] | number | undefined | null;
  password: string | readonly string[] | number | undefined | null;
}

interface PasswordRegexes {
  number: RegExp;
  lowercase: RegExp;
  uppercase: RegExp;
  specialChar: RegExp;
}

interface UseSignupForm {
  signupFormDatas: SignupFormDatas;
  confirmPassword: string | null | undefined;
  confirmPasswordInputValue: string | null;
  passwordHasANumber: boolean;
  passwordHasALowercase: boolean;
  passwordHasAUppercase: boolean;
  passwordHasASpecialChar: boolean;
  passwordRegexes: PasswordRegexes;
  checkboxChecked: boolean;
  signupButtonEnabled: boolean;
  signupFormIsSubmit: boolean;
  signupFormInputsHandler: (
    e: ChangeEvent<HTMLInputElement>,
    regex: RegExp
  ) => void;
  passwordInputChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  confirmPasswordInputHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  setCheckboxChecked: (checked: boolean) => void;
  setSignupButtonEnabled: () => void;
  setSignupFormIsSubmit: (value: boolean) => void;
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
  passwordHasANumber: false,
  passwordHasALowercase: false,
  passwordHasAUppercase: false,
  passwordHasASpecialChar: false,
  passwordRegexes,
  confirmPassword: null,
  confirmPasswordInputValue: null,
  checkboxChecked: false,
  signupButtonEnabled: false,
  signupFormIsSubmit: false,

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
  setCheckboxChecked: (checked) => set(() => ({ checkboxChecked: checked })),
  setSignupButtonEnabled: () => {
    const state = useSignupForm.getState();
    const isFormValid =
      typeof state.signupFormDatas.username === "string" &&
      typeof state.signupFormDatas.email === "string" &&
      typeof state.signupFormDatas.password === "string" &&
      typeof state.confirmPassword === "string" &&
      state.checkboxChecked === true;
    set(() => ({ signupButtonEnabled: isFormValid }));
  },
  setSignupFormIsSubmit: (value) => set(() => ({ signupFormIsSubmit: value })),
}));

export default useSignupForm;
