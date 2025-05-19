import { create } from "zustand";

type Status = {
  label: string;
  value: string;
};

export type Drafts = {
  id: number;
  url: string | null | undefined;
  resume: null | string;
  instruction: string | string[] | number | undefined;
};

interface UseAdd {
  baseResumeStatuses: Status[];
  baseResumeSelectedStatus: Status | null;
  fileInputValue: string | null;
  urlInputValue: string | null | undefined;
  instructionStatuses: Status[];
  instructionSelectedStatus: Status | null;
  textAreaValue: string | string[] | number | undefined;
  draftId: number;
  drafts: Drafts[];
  cloneDrafts: Drafts[];
  setBaseResumeStatuses: (statuses: Status[]) => void;
  setBaseResumeSelectedStatus: (value: string) => void;
  setFileInputValue: (value: string) => void;
  baseResumeAddStatus: () => void;
  setUrlInputValue: (value: string) => void;
  setInstructionStatuses: (statuses: Status[]) => void;
  setInstructionSelectedStatus: (value: string) => void;
  addInstructionStatus: () => void;
  setTextAreaValue: (value: string | string[] | number | undefined) => void;
  draftIdIncrese: () => void;
  addDraft: () => void;
  setDrafts: (index: number, newValue: Drafts) => void;
  setCloneDrafts: (index: number, newValue: Drafts) => void;
  deleteDraft: (index: number) => void;
}

const urlRegex =
  /^(https?:\/\/)?(www\.)?([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[^\s]*)?$/;
const INITIAL_DRAFT_ID = 1;

const useAdd = create<UseAdd>((set, get) => ({
  baseResumeStatuses: [],
  baseResumeSelectedStatus: null,
  fileInputValue: null,
  urlInputValue: null,
  instructionStatuses: [],
  instructionSelectedStatus: null,
  textAreaValue: "",
  draftId: INITIAL_DRAFT_ID,
  drafts: [],
  cloneDrafts: [],

  setBaseResumeStatuses: (baseResumeStatuses) => set({ baseResumeStatuses }),
  baseResumeAddStatus: () => {
    if (get().fileInputValue) {
      get().baseResumeStatuses.unshift({
        value: get().fileInputValue!,
        label: get().fileInputValue!,
      });
    }
  },
  setBaseResumeSelectedStatus: (value) => {
    const status =
      get().baseResumeStatuses.find((s) => s.value === value) || null;
    set({ baseResumeSelectedStatus: status });
  },
  setFileInputValue: (value) => set({ fileInputValue: value }),
  setUrlInputValue: (value) => {
    if (value && urlRegex.test(value)) {
      set({ urlInputValue: value });
    } else if (value === "") {
      set({ urlInputValue: null });
    } else {
      set({ urlInputValue: undefined });
    }
  },
  setInstructionStatuses: (instructionStatuses) => set({ instructionStatuses }),
  setInstructionSelectedStatus: (value) => {
    const status =
      get().instructionStatuses.find((s) => s.value === value) || null;
    set({ instructionSelectedStatus: status });
  },
  addInstructionStatus: () =>
    get().textAreaValue !== ""
      ? set({
          textAreaValue: `${get().textAreaValue} \n - ${
            get().instructionSelectedStatus?.value
          } `,
        })
      : set({
          textAreaValue: `${get().textAreaValue}-${
            get().instructionSelectedStatus?.value
          }`,
        }),
  setTextAreaValue: (value) => set({ textAreaValue: value }),
  draftIdIncrese: () => set({ draftId: get().draftId + 1 }),
  addDraft: () => {
    const newDraft: Drafts = {
      id: get().draftId,
      url: get().urlInputValue!,
      resume: get().baseResumeSelectedStatus!.value,
      instruction: get().textAreaValue!,
    };
    set({ drafts: [newDraft, ...get().drafts] });
    set({ cloneDrafts: [newDraft, ...get().cloneDrafts] });
  },
  setDrafts: (index, newValue) =>
    set({
      drafts: get().drafts.map((draft, i) => (i === index ? newValue : draft)),
    }),
  setCloneDrafts: (index, newValue) =>
    set({
      cloneDrafts: get().cloneDrafts.map((draft, i) =>
        i === index ? newValue : draft
      ),
    }),
  deleteDraft: (index) => {
    get().drafts.splice(index, 1);
    const allDrafts = get().drafts;
    set({ drafts: allDrafts });
    set({ cloneDrafts: allDrafts });
  },
}));

export default useAdd;
