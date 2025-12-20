import { e } from "build/server/assets/server-build-BYfYjM3e";

export type TFileTree = {
  name: string;
  path: string;
  children: TFileTree[];
};

export function createFileTreeFromFilePaths(filePaths: string[]): TFileTree {
  const root: TFileTree = { name: "/", children: [], path: "" };

  for (const path of filePaths) {
    const parts = path.split("/").filter(Boolean);
    let current = root;

    for (const part of parts) {
      let child = current.children?.find((child) => child.name === part);

      if (!child) {
        child = { name: part, children: [], path: `${current.path}/${part}` };
        current.children?.push(child);
      }

      current = child;
    }
  }

  return root;
}

export function getFileExtension(filename: string): string {
  const extension = filename.split(".").pop()?.toLowerCase();
  return extension || "";
}
