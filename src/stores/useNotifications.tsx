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
  resetNumberOfNots: () => void;
}

const INITIAL_NUMBER_OF_NOTS = 0;

const useNotifications = create<UseNotifications>((set, get) => ({
  notifications: [],
  numberOfNots: INITIAL_NUMBER_OF_NOTS,

  setNotifications: (notifications) => set({ notifications }),
  setNumberOfNots: () => set({ numberOfNots: get().notifications.length }),
  resetNumberOfNots: () => set({ numberOfNots: INITIAL_NUMBER_OF_NOTS }),
}));

export default useNotifications;
