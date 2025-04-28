import { create } from "zustand";

interface UseSidebar {
  sidebarIsOpen: boolean;
  toggleSidebar: () => void;
  //   closeSidebar: () => void;
  //   openSidebar: () => void;
}

const useSidebar = create<UseSidebar>((set) => ({
  sidebarIsOpen: false,
  toggleSidebar: () =>
    set((state) => ({ sidebarIsOpen: !state.sidebarIsOpen })),
  //   closeSidebar: () => set({ sidebarIsOpen: false }),
  //   openSidebar: () => set({ sidebarIsOpen: true }),
}));

export default useSidebar;
