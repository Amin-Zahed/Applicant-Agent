import { create } from "zustand";

export type Data = {
  id: string;
  status: string;
  employer: string | null | undefined;
  baseResume: string | null;
  changedResume: string | null;
  coverLetter: string | null;
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
