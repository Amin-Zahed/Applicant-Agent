import { create } from "zustand";

interface UseAppSidebar {
  sidebarIsOpen: boolean;
  toggleAppSidebar: () => void;
}

const useAppSidebar = create<UseAppSidebar>((set, get) => ({
  sidebarIsOpen: false,

  toggleAppSidebar: () => set({ sidebarIsOpen: !get().sidebarIsOpen }),
}));

export default useAppSidebar;
