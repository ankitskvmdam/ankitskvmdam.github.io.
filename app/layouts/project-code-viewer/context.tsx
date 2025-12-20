import React from "react";
import {
  createFileTreeFromFilePaths,
  getFileExtension,
  TFileTree,
  TProjectCodeViewerFilePath,
} from "./utils";
import { useSearchParams } from "react-router";
import { ACTIVE_FILE_SEARCH_PARAM } from "~/constants/search-params";

export type TCode = {
  isLoading: boolean;
  content: string | null;
  language: string;
  error?: unknown;
};

export type TCodeRecord = Record<string, TCode>;

export type TProjectCodeViewerContext = {
  tree: TFileTree;
  activeFile: TProjectCodeViewerFilePath;
  isLoading: boolean;
  code: TCodeRecord;
  setActiveFile: (file: TFileTree) => void;
};

export const ProjectCodeViewerContext =
  React.createContext<TProjectCodeViewerContext | null>(null);

export type TProjectCodeViewerProviderProps = {
  children: React.ReactNode;
  files: TProjectCodeViewerFilePath[];
  defaultActiveFilename?: TProjectCodeViewerFilePath;
};

export function ProjectCodeViewerProvider(
  props: TProjectCodeViewerProviderProps,
) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { children, files } = props;

  const activeFileDisplayURL = searchParams.get(ACTIVE_FILE_SEARCH_PARAM);
  const _defaultActiveFilename =
    (activeFileDisplayURL &&
      files.find((file) => file.displayURL === activeFileDisplayURL)) ||
    files[0];

  const { defaultActiveFilename = _defaultActiveFilename } = props;

  const [activeFile, setActiveFile] = React.useState(defaultActiveFilename);

  const [code, setCode] = React.useState<TCodeRecord>({
    [activeFile.displayURL]: {
      isLoading: true,
      content: null,
      error: undefined,
      language: getFileExtension(activeFile.displayURL),
    },
  });

  const tree = React.useMemo(() => {
    return createFileTreeFromFilePaths(files);
  }, [files]);

  const fetchFile = React.useCallback(
    async (file: TProjectCodeViewerFilePath) => {
      setCode((code) => ({
        ...code,
        [file.displayURL]: {
          isLoading: true,
          content: null,
          error: undefined,
          language: getFileExtension(file.displayURL),
        },
      }));
      try {
        const response = await fetch(file.rawFileURL);
        const content = await response.text();
        setCode((code) => ({
          ...code,
          [file.displayURL]: {
            isLoading: false,
            content,
            error: undefined,
            language: getFileExtension(file.displayURL),
          },
        }));
      } catch (error) {
        setCode((code) => ({
          ...code,
          [file.displayURL]: {
            isLoading: false,
            content: null,
            error,
            language: getFileExtension(file.displayURL),
          },
        }));
      }
    },

    [],
  );

  const handleSetActiveFile = React.useCallback(
    (file: TProjectCodeViewerFilePath) => {
      setActiveFile(file);
      setSearchParams((prev) => {
        prev.set(ACTIVE_FILE_SEARCH_PARAM, file.displayURL);
        return prev;
      });
    },
    [setActiveFile, setSearchParams],
  );

  React.useEffect(() => {
    if (!code[activeFile.displayURL] || !code[activeFile.displayURL].content) {
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
        setActiveFile: handleSetActiveFile,
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
