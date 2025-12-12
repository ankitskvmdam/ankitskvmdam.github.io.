import { useSearchParams } from "react-router";
import { ProjectBottomPreview } from "./bottom-preview";
import {
  CODE_TAB_SEARCH_PARAM,
  TAB_SEARCH_PARAM_QUERY_NAME,
} from "~/constants/search-params";
import { ProjectBottomCode } from "./bottom-code";

export function ProjectBottom() {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get(TAB_SEARCH_PARAM_QUERY_NAME);

  if (tab === CODE_TAB_SEARCH_PARAM) {
    return <ProjectBottomCode />;
  }

  return <ProjectBottomPreview />;
}
