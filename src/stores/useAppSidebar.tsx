import { create } from "zustand";

interface UseSidebar {
  sidebarIsOpen: boolean;
  toggleAppSidebar: () => void;
  //   closeSidebar: () => void;
  //   openSidebar: () => void;
}

const useAppSidebar = create<UseSidebar>((set) => ({
  sidebarIsOpen: false,
  toggleAppSidebar: () =>
    set((state) => ({ sidebarIsOpen: !state.sidebarIsOpen })),
  //   closeSidebar: () => set({ sidebarIsOpen: false }),
  //   openSidebar: () => set({ sidebarIsOpen: true }),
}));

export default useAppSidebar;
