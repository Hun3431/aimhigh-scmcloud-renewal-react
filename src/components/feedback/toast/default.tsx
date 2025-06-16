import { cn } from "cn-func";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  message: string;
  type?: "success" | "error" | "info" | "warning";
  onClose: () => void;
}

const typeColorMap = {
  success: "bg-green-400",
  error: "bg-red-400",
  info: "bg-gray-300",
  warning: "bg-orange-300",
};

const Toast = ({ message, type = "info", onClose }: Props) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "px-4 py-2 max-w-[20rem] rounded-lg shadow-md text-white animate-fade-in-up",
          typeColorMap[type]
        )}
        onClick={onClose}
      >
        {message}
      </motion.div>
    </AnimatePresence>
  );
};

export default Toast;
