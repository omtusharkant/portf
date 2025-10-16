import { FileModal } from "../FileModal";
import { FileItem } from "@shared/schema";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const mockFile: FileItem = {
  id: "demo",
  name: "example-project.md",
  type: "file",
  content: `# Example Project

This is a demonstration of how file content appears in the modal window.

## Features
- Clean, readable typography
- Scrollable content area
- Smooth animations
- Keyboard support (ESC to close)

## Technologies
React • TypeScript • Tailwind CSS • Framer Motion

The modal maintains the terminal aesthetic with monospace fonts and high contrast.`,
};

export default function FileModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-background p-8">
      <Button onClick={() => setIsOpen(true)} data-testid="button-open-modal">
        Open File Modal
      </Button>
      
      {isOpen && (
        <FileModal file={mockFile} onClose={() => setIsOpen(false)} />
      )}
    </div>
  );
}
