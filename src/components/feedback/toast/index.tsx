import { useAtomValue, useSetAtom } from "jotai";
import { toastsAtom, removeToastAtom } from "./atom";
import Toast from "./default";

const GlobalToast = () => {
  const toasts = useAtomValue(toastsAtom);
  const removeToast = useSetAtom(removeToastAtom);

  return (
    <div className="fixed top-4 right-4 z-[9999] flex flex-col gap-2">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};

export default GlobalToast;
