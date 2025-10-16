import { z } from "zod";

export const fileItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.literal("file"),
  content: z.string(),
  icon: z.string().optional(),
});

export type FileItem = z.infer<typeof fileItemSchema>;

export const folderItemSchema: z.ZodType<{
  id: string;
  name: string;
  type: "folder";
  children: FileSystemItem[];
  icon?: string;
}> = z.object({
  id: z.string(),
  name: z.string(),
  type: z.literal("folder"),
  children: z.lazy(() => z.array(fileSystemItemSchema)),
  icon: z.string().optional(),
});

export type FolderItem = z.infer<typeof folderItemSchema>;

export const fileSystemItemSchema: z.ZodType<FileItem | FolderItem> = z.union([
  fileItemSchema,
  folderItemSchema,
]);

export type FileSystemItem = z.infer<typeof fileSystemItemSchema>;
