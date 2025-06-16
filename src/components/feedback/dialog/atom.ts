import { atom } from "jotai";

interface DialogAtomType {
  isOpen: boolean;
  title: React.ReactNode;
  description: React.ReactNode;
  accept: () => void;
  cancel?: () => void;
  acceptText: string;
  cancelText: string;
}

export const dialogAtom = atom<DialogAtomType>({
  isOpen: false,
  title: "",
  description: "",
  accept: () => {},
  acceptText: "확인",
  cancelText: "취소",
});

type OpenDialogProps = Omit<DialogAtomType, "isOpen" | "cancel"> & {
  cancel?: () => void;
};

export const openDialogAtom = atom(
  null,
  (_, set, dialogProps: OpenDialogProps) => {
    set(dialogAtom, { isOpen: true, ...dialogProps });
  }
);

export const closeDialogAtom = atom(null, (_, set) => {
  set(dialogAtom, (prev) => ({ ...prev, isOpen: false }));
});
