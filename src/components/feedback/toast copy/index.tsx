import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai";
import { centerToastAtom } from "./atom";
import { useEffect } from "react";
import { cn } from "cn-func";

const CenterToast = () => {
  const [toast, setToast] = useAtom(centerToastAtom);
  const { isOpen, content, duration = 2000 } = toast;

  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      setToast((prev) => ({ ...prev, isOpen: false }));
    }, duration);

    return () => clearTimeout(timer);
  }, [isOpen, duration, setToast]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            "bg-gray-200 text-black px-6 py-3 rounded-lg shadow-lg z-[9999]",
            "text-sm text-center"
          )}
        >
          {content}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CenterToast;
