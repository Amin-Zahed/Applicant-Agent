import { create } from "zustand";

type Status = {
  label: string;
  value: string;
};

interface UseAdd {
  statuses: Status[];
  selectedStatus: Status | null;
  setStatuses: (statuses: Status[]) => void;
  setSelectedStatus: (value: string) => void;
}

export const useAdd = create<UseAdd>((set, get) => ({
  statuses: [],
  selectedStatus: null,

  setStatuses: (statuses) => set({ statuses }),

  setSelectedStatus: (value) => {
    const status = get().statuses.find((s) => s.value === value) || null;
    set({ selectedStatus: status });
  },
}));

export default useAdd;
