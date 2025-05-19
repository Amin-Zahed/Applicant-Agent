import { create } from "zustand";

interface UseAppSidebar {
  addSidebarIsOpen: boolean;
  dashboardSidebarIsOpen: boolean;
  addToggleAppSidebar: () => void;
  dashboardToggleAppSidebar: () => void;
  //   closeSidebar: () => void;
  //   openSidebar: () => void;
}

const useAppSidebar = create<UseAppSidebar>((set) => ({
  addSidebarIsOpen: false,
  dashboardSidebarIsOpen: true,
  addToggleAppSidebar: () =>
    set((state) => ({ addSidebarIsOpen: !state.addSidebarIsOpen })),
  dashboardToggleAppSidebar: () =>
    set((state) => ({ dashboardSidebarIsOpen: !state.dashboardSidebarIsOpen })),
  //   closeSidebar: () => set({ sidebarIsOpen: false }),
  //   openSidebar: () => set({ sidebarIsOpen: true }),
}));

export default useAppSidebar;
