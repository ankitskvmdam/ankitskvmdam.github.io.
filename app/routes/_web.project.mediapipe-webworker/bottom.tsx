import { useSearchParams } from "react-router";
import { ProjectBottomPreview } from "./bottom-preview";
import {
  CODE_TAB_SEARCH_PARAM,
  PREVIEW_TAB_SEARCH_PARAM,
  TAB_SEARCH_PARAM_QUERY_NAME,
} from "~/constants/search-params";
import { ProjectBottomCode } from "./bottom-code";
import { cn } from "~/lib/utils";

export function ProjectBottom() {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get(TAB_SEARCH_PARAM_QUERY_NAME);

  return (
    <>
      <ProjectBottomCode
        className={cn(tab !== CODE_TAB_SEARCH_PARAM && "hidden")}
      />
      <ProjectBottomPreview
        className={cn(tab !== PREVIEW_TAB_SEARCH_PARAM && "hidden")}
      />
    </>
  );
}
