import { create } from "zustand";

interface UsePrivacy {
  privacyShow: boolean;
  setPrivacyShow: (privacyShow: boolean) => void;
}

const usePrivacy = create<UsePrivacy>((set) => ({
  privacyShow: false,
  setPrivacyShow: (privacyShow: boolean) => set({ privacyShow }),
}));

export default usePrivacy;
