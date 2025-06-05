import { create } from "zustand";

export type Data = {
  id: string;
  status: "pending" | "rejected" | "interview";
  employer: string;
  baseResume: string;
  changedResume: string;
  coverLetter: string;
};

interface UseApplication {
  data: Data[];
  updateData: (datas: Data[]) => void;
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
