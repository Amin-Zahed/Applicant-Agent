import { create } from "zustand";

type Status = {
  label: string;
  value: string;
};

type Drafts = {
  url: string | null | undefined;
  resume: null | string;
  instruction: string | string[] | number | undefined;
};

interface UseAdd {
  baseResumeStatuses: Status[];
  baseResumeSelectedStatus: Status | null;
  fileInputValue: string | null;
  urlInputValue: string | null | undefined;
  instructionStatuses: Status[];
  instructionSelectedStatus: Status | null;
  textAreaValue: string | string[] | number | undefined;
  drafts: Drafts[];
  setBaseResumeStatuses: (statuses: Status[]) => void;
  setBaseResumeSelectedStatus: (value: string) => void;
  setFileInputValue: (value: string) => void;
  baseResumeAddStatus: () => void;
  setUrlInputValue: (value: string) => void;
  setInstructionStatuses: (statuses: Status[]) => void;
  setInstructionSelectedStatus: (value: string) => void;
  addInstructionStatus: () => void;
  setTextAreaValue: (value: string | string[] | number | undefined) => void;
  addDraft: () => void;
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
  drafts: [],

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
  addDraft: () => {
    const newDraft: Drafts = {
      url: get().urlInputValue!,
      resume: get().baseResumeSelectedStatus!.value,
      instruction: get().textAreaValue!,
    };
    set({ drafts: [newDraft, ...get().drafts] });
  },
}));

export default useAdd;
