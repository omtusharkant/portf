import { FileContent } from "../FileContent";
import { FileItem } from "@shared/schema";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const mockFile: FileItem = {
  id: "demo",
  name: "example-project.md",
  type: "file",
  content: `# Example Project

This is a demonstration of how file content appears in the right panel.

## Features
- Clean, readable typography
- Scrollable content area
- Persistent display
- Monospace fonts

## Technologies
React • TypeScript • Tailwind CSS • Framer Motion

The content panel maintains the terminal aesthetic with monospace fonts and high contrast.`,
};

export default function FileContentExample() {
  const [file, setFile] = useState<FileItem | null>(null);

  return (
    <div className="h-screen flex flex-col bg-background">
      <div className="p-4 border-b border-border">
        <Button
          onClick={() => setFile(file ? null : mockFile)}
          data-testid="button-toggle-file"
        >
          {file ? "Clear Selection" : "Show File"}
        </Button>
      </div>
      <div className="flex-1">
        <FileContent file={file} />
      </div>
    </div>
  );
}
