import { FileItem } from "@shared/schema";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface FileModalProps {
  file: FileItem;
  onClose: () => void;
}

export function FileModal({ file, onClose }: FileModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-black/80"
          data-testid="modal-backdrop"
        />

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl bg-[#1E1E1E] border border-[#404040] rounded-md shadow-xl z-10 flex flex-col max-h-[80vh]"
          data-testid="modal-content"
        >
          <div className="flex items-center justify-between h-12 px-6 bg-background border-b border-[#404040] rounded-t-md flex-shrink-0">
            <h2 className="text-base font-semibold text-foreground font-mono">
              {file.name}
            </h2>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center hover-elevate active-elevate-2 rounded transition-all duration-150"
              data-testid="button-close-modal"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>
          </div>

          <div className="p-6 overflow-auto flex-1">
            <div className="text-sm text-foreground font-mono whitespace-pre-wrap leading-relaxed">
              {file.content}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
