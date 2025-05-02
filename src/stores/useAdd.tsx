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
  setBaseResumeStatuses: (statuses: Status[]) => void;
  setBaseResumeSelectedStatus: (value: string) => void;
  setFileInputValue: (value: string) => void;
  baseResumeAddStatus: () => void;
  setUrlInputValue: (value: string) => void;
}

const urlRegex =
  /^(https?:\/\/)?(www\.)?([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[^\s]*)?$/;

export const useAdd = create<UseAdd>((set, get) => ({
  baseResumeStatuses: [],
  baseResumeSelectedStatus: null,
  fileInputValue: null,
  urlInputValue: null,

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
}));

export default useAdd;
