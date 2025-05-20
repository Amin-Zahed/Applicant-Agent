import { create } from "zustand";

export type Payment = {
  id: string;
  status: "pending" | "rejected" | "interview";
  employee: string;
  baseResume: string;
  changedResume: string;
  time: number;
};

interface UseApplication {
  data: Payment[];
  updateData: (datas: Payment[]) => void;
  deleteData: (index: number) => void;
}

const useApplication = create<UseApplication>((set, get) => ({
  data: [],

  updateData: (datas) => set({ data: datas }),
  deleteData: (index) => {
    get().data.splice(index, 1);
    const allDatas = get().data;
    set({ data: allDatas });
    // set({ cloneDrafts: allDrafts });
  },
}));

export default useApplication;
