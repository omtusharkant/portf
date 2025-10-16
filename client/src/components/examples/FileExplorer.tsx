import { FileExplorer } from "../FileExplorer";
import { FileSystemItem } from "@shared/schema";

const mockData: FileSystemItem[] = [
  {
    id: "projects",
    name: "Projects",
    type: "folder",
    children: [
      {
        id: "project1",
        name: "project1.md",
        type: "file",
        content: `# E-Commerce Platform

A full-stack solution built with React and Node.js.`,
      },
      {
        id: "project2",
        name: "project2.md",
        type: "file",
        content: `# Task Manager App

A collaborative task management application.`,
      },
    ],
  },
  {
    id: "contact",
    name: "Contact",
    type: "folder",
    children: [
      {
        id: "contact-info",
        name: "info.md",
        type: "file",
        content: `# Contact Information

Email: hello@portfolio.dev
GitHub: github.com/yourprofile`,
      },
    ],
  },
];

export default function FileExplorerExample() {
  return <FileExplorer data={mockData} />;
}
