export type TFileTree = {
  name: string;
  path?: string;
  children?: TFileTree[];
};

export function createFilterTreeFromFilePaths(filePaths: string[]): TFileTree {
  const root: TFileTree = { name: "/", children: [] };

  for (const path of filePaths) {
    const parts = path.split("/").filter(Boolean);
    let current = root;

    for (const part of parts) {
      let child = current.children?.find((child) => child.name === part);

      if (!child) {
        child = { name: part, children: [] };
        current.children?.push(child);
      }

      current = child;
    }
  }

  return root;
}
