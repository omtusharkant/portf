import { FolderTree } from "../FolderTree";
import { FileSystemItem } from "@shared/schema";

const mockItems: FileSystemItem[] = [
  {
    id: "folder1",
    name: "Documents",
    type: "folder",
    children: [
      {
        id: "file1",
        name: "resume.md",
        type: "file",
        content: "Resume content here",
      },
      {
        id: "file2",
        name: "cover-letter.md",
        type: "file",
        content: "Cover letter content",
      },
    ],
  },
  {
    id: "file3",
    name: "readme.md",
    type: "file",
    content: "Readme content",
  },
];

export default function FolderTreeExample() {
  return (
    <div className="bg-background p-4">
      <FolderTree
        items={mockItems}
        onFileClick={(file) => console.log("File clicked:", file.name)}
        level={0}
      />
    </div>
  );
}
