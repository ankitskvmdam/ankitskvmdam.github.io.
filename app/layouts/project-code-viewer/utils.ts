export type TProjectCodeViewerFilePath = {
  /**
   * Will use this URL to fetch raw file from the server.
   * Give full path.
   */
  rawFileURL: string;
  /**
   * Will use this URL to redirect user if we fail
   * to fetch the raw URL.
   */
  viewFileURL: string;
  /**
   * Will use this URL to build file tree.
   */
  displayURL: string;
};

export type TFileTree = TProjectCodeViewerFilePath & {
  name: string;
  children: TFileTree[];
};

export function createFileTreeFromFilePaths(
  filePaths: TProjectCodeViewerFilePath[],
): TFileTree {
  const root: TFileTree = {
    name: "/",
    children: [],
    rawFileURL: "",
    viewFileURL: "",
    displayURL: "",
  };

  for (const file of filePaths) {
    const parts = file.displayURL.split("/").filter(Boolean);
    let current = root;

    for (const part of parts) {
      let child = current.children?.find((child) => child.name === part);

      if (!child) {
        child = {
          name: part,
          children: [],
          displayURL: `${current.displayURL}/${part}`,
          rawFileURL: file.rawFileURL,
          viewFileURL: file.viewFileURL,
        };
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
