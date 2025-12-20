import React from "react";
import {
  createFileTreeFromFilePaths,
  getFileExtension,
  TFileTree,
} from "./utils";

export type TCode = {
  isLoading: boolean;
  content: string | null;
  language: string;
  error?: unknown;
};

export type TCodeRecord = Record<string, TCode>;

export type TProjectCodeViewerContext = {
  tree: TFileTree;
  activeFile: string;
  baseURL: string;
  baseRawURL: string;
  isLoading: boolean;
  code: TCodeRecord;
  setActiveFile: (file: string) => void;
};

export const ProjectCodeViewerContext =
  React.createContext<TProjectCodeViewerContext | null>(null);

export type TProjectCodeViewerProviderProps = {
  children: React.ReactNode;
  files: string[];
  baseURL: string;
  baseRawURL: string;
  defaultActiveFile: string;
};

export function ProjectCodeViewerProvider(
  props: TProjectCodeViewerProviderProps,
) {
  const { children, files, baseURL, baseRawURL, defaultActiveFile } = props;

  const [activeFile, setActiveFile] = React.useState(`/${defaultActiveFile}`);
  const [code, setCode] = React.useState<TCodeRecord>({
    [activeFile]: {
      isLoading: true,
      content: null,
      error: undefined,
      language: getFileExtension(activeFile),
    },
  });

  const tree = React.useMemo(() => {
    return createFileTreeFromFilePaths(files);
  }, [files]);

  const fetchFile = React.useCallback(
    async (file: string) => {
      setCode((code) => ({
        ...code,
        [file]: {
          isLoading: true,
          content: null,
          error: undefined,
          language: getFileExtension(file),
        },
      }));
      try {
        const response = await fetch(`${baseRawURL}${file}`);
        const content = await response.text();
        setCode((code) => ({
          ...code,
          [file]: {
            isLoading: false,
            content,
            error: undefined,
            language: getFileExtension(file),
          },
        }));
      } catch (error) {
        setCode((code) => ({
          ...code,
          [file]: {
            isLoading: false,
            content: null,
            error,
            language: getFileExtension(file),
          },
        }));
      }
    },

    [baseURL],
  );

  React.useEffect(() => {
    if (!code[activeFile] || !code[activeFile].content) {
      fetchFile(activeFile);
    }
  }, [activeFile]);

  return (
    <ProjectCodeViewerContext.Provider
      value={{
        tree,
        activeFile,
        isLoading: false,
        code,
        baseURL,
        baseRawURL,
        setActiveFile,
      }}
    >
      {children}
    </ProjectCodeViewerContext.Provider>
  );
}

export function useProjectCodeViewer() {
  const context = React.useContext(ProjectCodeViewerContext);
  if (!context) {
    throw new Error(
      "useProjectCodeViewer must be used within a ProjectCodeViewerProvider",
    );
  }
  return context;
}
