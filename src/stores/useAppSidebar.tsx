import { create } from "zustand";

interface UseAppSidebar {
  sidebarIsOpen: boolean;
  toggleAppSidebar: () => void;
  // dashboardToggleAppSidebar: () => void;
  //   closeSidebar: () => void;
  //   openSidebar: () => void;
}

const useAppSidebar = create<UseAppSidebar>((set) => ({
  sidebarIsOpen: false,

  toggleAppSidebar: () =>
    set((state) => ({ sidebarIsOpen: !state.sidebarIsOpen })),
}));

export default useAppSidebar;
