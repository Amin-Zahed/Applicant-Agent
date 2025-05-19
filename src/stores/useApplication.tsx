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
}

const useApplication = create<UseApplication>((set, get) => ({
  data: [],
  updateData: (datas) => set({ data: datas }),
}));

export default useApplication;
