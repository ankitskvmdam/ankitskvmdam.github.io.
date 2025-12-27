import { useNavigate, useSearchParams } from "react-router";
import { ProjectBottomPreview } from "./bottom-preview";
import {
  CODE_TAB_SEARCH_PARAM,
  PREVIEW_TAB_SEARCH_PARAM,
  TAB_SEARCH_PARAM_QUERY_NAME,
} from "~/constants/search-params";
import { ProjectBottomCode } from "./bottom-code";
import { cn } from "~/lib/utils";
import React from "react";

export function ProjectBottom() {
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const tab = React.useMemo(() => {
    return searchParams.get(TAB_SEARCH_PARAM_QUERY_NAME);
  }, [searchParams]);

  React.useEffect(() => {
    if (tab) {
      // If tab is defined then no need to navigate.
      return;
    }

    navigate({
      search: `?${TAB_SEARCH_PARAM_QUERY_NAME}=${PREVIEW_TAB_SEARCH_PARAM}`,
    });
  }, [tab, navigate]);

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
