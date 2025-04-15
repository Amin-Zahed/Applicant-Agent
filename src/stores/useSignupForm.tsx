import { create } from "zustand";
import { ChangeEvent } from "react";

interface SignupFormDatas {
  username: string | null | undefined;
  email: string | null | undefined;
  password: string | null | undefined;
}

interface UseSignupForm {
  signupFormInputsHandler: (
    e: ChangeEvent<HTMLInputElement>,
    regex: RegExp
  ) => void;
  signupFormDatas: SignupFormDatas;
  setSignupFormDatas: (data: SignupFormDatas) => void;
}

const initialSignupFormDatas: SignupFormDatas = {
  username: null,
  email: null,
  password: null,
};

const useSignupForm = create<UseSignupForm>((set) => ({
  signupFormDatas: initialSignupFormDatas,

  setSignupFormDatas: (data: SignupFormDatas) =>
    set(() => ({ signupFormDatas: data })),

  signupFormInputsHandler: (
    e: ChangeEvent<HTMLInputElement>,
    regex: RegExp
  ) => {
    const { name, value } = e.target;
    if (regex.test(value)) {
      set((state) => ({
        signupFormDatas: { ...state.signupFormDatas, [name]: value },
      }));
    } else {
      set((state) => ({
        signupFormDatas: { ...state.signupFormDatas, [name]: undefined },
      }));
    }
    if (value === "") {
      set((state) => ({
        signupFormDatas: { ...state.signupFormDatas, [name]: null },
      }));
    }
  },
}));

export default useSignupForm;
