import { cn } from "cn-func";
import { AnimatePresence, motion } from "framer-motion";

interface DialogProps {
  isOpen: boolean;
  title: React.ReactNode;
  description: React.ReactNode;
  accept: () => void;
  cancel: () => void;
  acceptText: string;
  cancelText: string;
}

const Dialog = ({
  isOpen,
  cancel,
  accept,
  title,
  description,
  acceptText,
  cancelText,
}: DialogProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[999] bg-black/50"
            onClick={cancel}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000]",
              "flex flex-col gap-4",
              "w-4/5 max-w-[400px] min-w-[300px] bg-white rounded-lg p-6 "
            )}
          >
            <div className="text-lg font-semibold">{title}</div>
            <div className="text-base">{description}</div>
            <div className="flex gap-2">
              <button
                className="flex-1 px-4 py-2 bg-white text-black border border-gray-200 rounded-lg cursor-pointer"
                onClick={cancel}
              >
                {cancelText}
              </button>
              <button
                className="flex-1 px-4 py-2 bg-red-400 text-white rounded-lg cursor-pointer"
                onClick={accept}
              >
                {acceptText}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Dialog;
