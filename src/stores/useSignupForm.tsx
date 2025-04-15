import { create } from "zustand";
import { ChangeEvent } from "react";

interface UseSignupForm {
  username: null | string;
  password: null | string;
  email: null | string;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  usernameInputHandler: (
    e: ChangeEvent<HTMLInputElement>,
    regex: RegExp
  ) => void;
}

const useSignupForm = create<UseSignupForm>((set) => ({
  username: null,
  password: null,
  email: null,
  setUsername: (username) => set({ username }),
  setPassword: (password) => set({ password }),
  usernameInputHandler: (e, regex) => {
    const { name, value } = e.target;
    set((state) => {
      if (value) {
        if (value.match(regex)) {
          return { ...state, [name]: value };
        } else {
          return { ...state, [name]: "notValid" };
        }
      } else {
        return { ...state, [name]: null };
      }
    });
  },
}));
