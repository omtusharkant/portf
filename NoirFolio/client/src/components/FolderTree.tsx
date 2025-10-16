import { useState } from "react";
import { FileSystemItem, FileItem, FolderItem } from "@shared/schema";
import { ChevronRight, Folder, File } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FolderTreeProps {
  items: FileSystemItem[];
  onFileClick: (file: FileItem) => void;
  level: number;
  selectedFileId?: string;
}

export function FolderTree({ items, onFileClick, level, selectedFileId }: FolderTreeProps) {
  return (
    <div className="select-none py-3">
      {items.map((item) => (
        <TreeItem
          key={item.id}
          item={item}
          onFileClick={onFileClick}
          level={level}
          selectedFileId={selectedFileId}
        />
      ))}
    </div>
  );
}

interface TreeItemProps {
  item: FileSystemItem;
  onFileClick: (file: FileItem) => void;
  level: number;
  selectedFileId?: string;
}

function TreeItem({ item, onFileClick, level, selectedFileId }: TreeItemProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const isFolder = item.type === "folder";
  const isSelected = !isFolder && item.id === selectedFileId;

  const handleClick = () => {
    if (isFolder) {
      setIsExpanded(!isExpanded);
    } else {
      onFileClick(item as FileItem);
    }
  };

  return (
    <div>
      <motion.div
        whileHover={{ x: 4 }}
        whileTap={{ scale: 0.98 }}
        className={`flex items-center h-8 cursor-pointer hover-elevate active-elevate-2 transition-all duration-150 ${
          isSelected ? "bg-primary/20 glossy-card" : ""
        }`}
        style={{ paddingLeft: `${level * 24 + 12}px` }}
        onClick={handleClick}
        data-testid={isFolder ? `folder-${item.id}` : `file-${item.id}`}
      >
        {isFolder && (
          <motion.div
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="mr-1"
          >
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </motion.div>
        )}
        {!isFolder && <div className="w-5" />}
        
        {isFolder ? (
          <Folder className="w-4 h-4 mr-2 text-[#FFD700]" />
        ) : (
          <File className="w-4 h-4 mr-2 text-primary" />
        )}
        
        <span className="text-sm text-foreground font-mono">{item.name}</span>
      </motion.div>

      {isFolder && (
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <FolderTree
                items={(item as FolderItem).children}
                onFileClick={onFileClick}
                level={level + 1}
                selectedFileId={selectedFileId}
              />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
