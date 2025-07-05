import { create } from "zustand";

interface UseLanding {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const useLanding = create<UseLanding>((set) => ({
  activeSection: "hero",

  setActiveSection: (section) => {
    set({ activeSection: section });
  },
}));

export default useLanding;
