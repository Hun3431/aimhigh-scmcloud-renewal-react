import { atom } from "jotai";

export interface ToastType {
  id: string;
  message: string;
  type?: "success" | "error" | "info" | "warning";
  duration?: number; // ms
}

export const toastsAtom = atom<ToastType[]>([]);

export const openToastAtom = atom(
  null,
  (get, set, toast: Omit<ToastType, "id">) => {
    const id = Date.now().toString();
    const newToast = { ...toast, id };
    set(toastsAtom, [...get(toastsAtom), newToast]);

    const duration = toast.duration ?? 3000;

    // 자동 제거 타이머
    const timer = setTimeout(() => {
      set(toastsAtom, (prev) => prev.filter((t) => t.id !== id));
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }
);

export const removeToastAtom = atom(null, (get, set, id: string) => {
  set(
    toastsAtom,
    get(toastsAtom).filter((t) => t.id !== id)
  );
});
