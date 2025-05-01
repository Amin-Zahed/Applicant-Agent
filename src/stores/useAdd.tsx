import { create } from "zustand";

interface UseAdd {
  sidebarIsOpen: boolean;
  toggleAppSidebar: () => void;
  //   closeSidebar: () => void;
  //   openSidebar: () => void;
}

const useAdd = create<UseAdd>((set) => ({
  sidebarIsOpen: false,
  toggleAppSidebar: () =>
    set((state) => ({ sidebarIsOpen: !state.sidebarIsOpen })),
  //   closeSidebar: () => set({ sidebarIsOpen: false }),
  //   openSidebar: () => set({ sidebarIsOpen: true }),
}));

export default useAdd;
