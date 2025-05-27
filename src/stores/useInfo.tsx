import { create } from "zustand";

interface UseInfo {
  portraitFile: File | null;
  portraitURL: string | null;
  setPortraitFile: (file: File | null) => void;
  setPortraitUrl: () => void;
}

const useInfo = create<UseInfo>((set, get) => ({
  portraitFile: null,
  portraitURL: null,

  setPortraitFile: (file: File | null) => {
    set({ portraitFile: file });
  },
  setPortraitUrl: () => {
    const url = URL.createObjectURL(get().portraitFile!);
    set({ portraitURL: url });
  },
}));

export default useInfo;
