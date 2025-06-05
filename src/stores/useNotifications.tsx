import { create } from "zustand";

interface UseNotifications {
  numberOfNots: number;
  setNumberOfNots: (number: number) => void;
}

const INITIAL_NUMBER_OF_NOTS = 0;

const useNotifications = create<UseNotifications>((set, get) => ({
  numberOfNots: INITIAL_NUMBER_OF_NOTS,

  setNumberOfNots: (number) => set({ numberOfNots: number }),
}));

export default useNotifications;
