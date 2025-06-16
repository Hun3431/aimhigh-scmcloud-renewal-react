import { atom } from "jotai";

export interface CenterToastState {
  content: React.ReactNode;
  isOpen: boolean;
  duration?: number;
}

export const centerToastAtom = atom<CenterToastState>({
  content: null,
  isOpen: false,
  duration: 2000,
});
