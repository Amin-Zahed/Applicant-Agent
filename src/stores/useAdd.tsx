import { create } from "zustand";

type Status = {
  label: string;
  value: string;
};

interface UseAdd {
  baseResumeStatuses: Status[];
  baseResumeSelectedStatus: Status | null;
  fileInputValue: string | null;
  urlInputValue: string | null | undefined;
  instructionStatuses: Status[];
  instructionSelectedStatus: Status | null;
  textAreaValue: string | readonly string[] | number | undefined;
  setBaseResumeStatuses: (statuses: Status[]) => void;
  setBaseResumeSelectedStatus: (value: string) => void;
  setFileInputValue: (value: string) => void;
  baseResumeAddStatus: () => void;
  setUrlInputValue: (value: string) => void;
  setInstructionStatuses: (statuses: Status[]) => void;
  setInstructionSelectedStatus: (value: string) => void;
  addInstructionStatus: () => void;
  setTextAreaValue: (
    value: string | readonly string[] | number | undefined
  ) => void;
}

const urlRegex =
  /^(https?:\/\/)?(www\.)?([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[^\s]*)?$/;

export const useAdd = create<UseAdd>((set, get) => ({
  baseResumeStatuses: [],
  baseResumeSelectedStatus: null,
  fileInputValue: null,
  urlInputValue: null,
  instructionStatuses: [],
  instructionSelectedStatus: null,
  textAreaValue: "",

  setBaseResumeStatuses: (baseResumeStatuses) => set({ baseResumeStatuses }),
  baseResumeAddStatus: () => {
    if (get().fileInputValue) {
      get().baseResumeStatuses.unshift({
        value: get().fileInputValue!,
        label: get().fileInputValue!,
      });
    }
  },
  setBaseResumeSelectedStatus: (value) => {
    const status =
      get().baseResumeStatuses.find((s) => s.value === value) || null;
    set({ baseResumeSelectedStatus: status });
  },
  setFileInputValue: (value) => set({ fileInputValue: value }),
  setUrlInputValue: (value) => {
    if (value && urlRegex.test(value)) {
      set({ urlInputValue: value });
    } else if (value === "") {
      set({ urlInputValue: null });
    } else {
      set({ urlInputValue: undefined });
    }
  },
  setInstructionStatuses: (instructionStatuses) => set({ instructionStatuses }),
  setInstructionSelectedStatus: (value) => {
    const status =
      get().instructionStatuses.find((s) => s.value === value) || null;
    set({ instructionSelectedStatus: status });
  },
  addInstructionStatus: () =>
    get().textAreaValue !== ""
      ? set({
          textAreaValue: `${get().textAreaValue} \n -${
            get().instructionSelectedStatus?.value
          }`,
        })
      : set({
          textAreaValue: `${get().textAreaValue}-${
            get().instructionSelectedStatus?.value
          }`,
        }),
  setTextAreaValue: (value) => set({ textAreaValue: value }),
}));

export default useAdd;
