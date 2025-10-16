import { useState, useEffect } from "react";
import { FileSystemItem, FileItem } from "@shared/schema";
import { FolderTree } from "./FolderTree";
import { FileContent } from "./FileContent";
import { useTheme } from "../contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";

interface FileExplorerProps {
  data: FileSystemItem[];
  defaultFileId?: string;
}

function findFileById(items: FileSystemItem[], id: string): FileItem | null {
  for (const item of items) {
    if (item.type === "file" && item.id === id) {
      return item;
    }
    if (item.type === "folder") {
      const found = findFileById(item.children, id);
      if (found) return found;
    }
  }
  return null;
}

export function FileExplorer({ data, defaultFileId }: FileExplorerProps) {
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (defaultFileId) {
      const defaultFile = findFileById(data, defaultFileId);
      if (defaultFile) {
        setSelectedFile(defaultFile);
      }
    }
  }, [data, defaultFileId]);

  const handleFileClick = (file: FileItem) => {
    setSelectedFile(file);
  };

  return (
    <div className="h-screen w-full bg-background flex overflow-hidden">
      <div className="w-80 border-r border-border flex-shrink-0 overflow-auto flex flex-col">
        <div className="p-3 border-b border-border flex items-center justify-between">
          <span className="text-sm font-medium">Explorer</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-8 w-8"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>
        <div className="flex-1 overflow-auto">
          <FolderTree items={data} onFileClick={handleFileClick} level={0} selectedFileId={selectedFile?.id} />
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <FileContent file={selectedFile} />
      </div>
    </div>
  );
}
