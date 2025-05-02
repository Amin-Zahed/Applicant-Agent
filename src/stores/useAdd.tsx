import { create } from "zustand";

type Status = {
  label: string;
  value: string;
};

interface UseAdd {
  statuses: Status[];
  selectedStatus: Status | null;
  fileInputValue: string | null;
  setStatuses: (statuses: Status[]) => void;
  setSelectedStatus: (value: string) => void;
  setFileInputValue: (value: string) => void;
  addStatus: () => void;
}

export const useAdd = create<UseAdd>((set, get) => ({
  statuses: [],
  selectedStatus: null,
  fileInputValue: null,

  setStatuses: (statuses) => set({ statuses }),

  addStatus: () => {
    if (get().fileInputValue) {
      get().statuses.unshift({
        value: get().fileInputValue!,
        label: get().fileInputValue!,
      });
    }
  },

  setSelectedStatus: (value) => {
    const status = get().statuses.find((s) => s.value === value) || null;
    set({ selectedStatus: status });
  },

  setFileInputValue: (value) => set({ fileInputValue: value }),
}));

export default useAdd;
