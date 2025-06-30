import { create } from "zustand";
import { ChangeEvent } from "react";

interface ScheduleDemoFormDatas {
  name: string | readonly string[] | number | undefined | null;
  email: string | readonly string[] | number | undefined | null;
  anythingElse?: string | readonly string[] | number | undefined | null;
}

interface UseScheduleForm {
  scheduleDemoFormDatas: ScheduleDemoFormDatas;
  profession: string | null;
  scheduleDemoFormIsSubmit: boolean;
  scheduleDemoFormInputsHandler: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    regex: RegExp
  ) => void;
  setProfession: (profession: string) => void;
  setScheduleDemoFormIsSubmit: (isSubmit: boolean) => void;
}

const initialScheduleDemoFormDatas: ScheduleDemoFormDatas = {
  name: null,
  email: null,
  anythingElse: null,
};

const useScheduleForm = create<UseScheduleForm>((set) => ({
  scheduleDemoFormDatas: initialScheduleDemoFormDatas,
  profession: null,
  scheduleDemoFormIsSubmit: false,

  scheduleDemoFormInputsHandler: (e, regex) => {
    const { name, value } = e.target;
    if (value === "") {
      set((state) => ({
        scheduleDemoFormDatas: { ...state.scheduleDemoFormDatas, [name]: null },
      }));
    } else if (regex.test(value)) {
      set((state) => ({
        scheduleDemoFormDatas: {
          ...state.scheduleDemoFormDatas,
          [name]: value,
        },
      }));
    } else {
      set((state) => ({
        scheduleDemoFormDatas: {
          ...state.scheduleDemoFormDatas,
          [name]: undefined,
        },
      }));
    }
  },
  setProfession: (profession: string) =>
    set({ profession: profession || null }),
  setScheduleDemoFormIsSubmit: (isSubmit: boolean) =>
    set({ scheduleDemoFormIsSubmit: isSubmit }),
}));

export default useScheduleForm;
