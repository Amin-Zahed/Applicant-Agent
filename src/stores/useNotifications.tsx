import { create } from "zustand";

type Notifications = {
  id: number;
  title: string;
  content: string;
};

interface UseNotifications {
  notifications: Notifications[];
  numberOfNots: number;
  setNotifications: (notifications: Notifications[]) => void;
  setNumberOfNots: () => void;
}

const useNotifications = create<UseNotifications>((set, get) => ({
  notifications: [],
  numberOfNots: 0,

  setNotifications: (notifications) => set({ notifications }),
  setNumberOfNots: () => set({ numberOfNots: get().notifications.length }),
}));

export default useNotifications;
