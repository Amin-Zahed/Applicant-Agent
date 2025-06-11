import { create } from "zustand";

interface UsePrivacy {
  showPrivacy: boolean;
  setShowPrivacy: (showPrivacy: boolean) => void;
}

const usePrivacy = create<UsePrivacy>((set) => ({
  showPrivacy: false,

  setShowPrivacy: (showPrivacy: boolean) => set({ showPrivacy }),
}));

export default usePrivacy;
