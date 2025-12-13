import React from "react";
import { useSearchParams } from "react-router";
import { ButtonsOneActive } from "~/components/buttons-one-active";
import {
  CODE_TAB_SEARCH_PARAM,
  PREVIEW_TAB_SEARCH_PARAM,
  TAB_SEARCH_PARAM_QUERY_NAME,
} from "~/constants/search-params";

const tabs = [
  { id: PREVIEW_TAB_SEARCH_PARAM, label: "Preview" },
  { id: CODE_TAB_SEARCH_PARAM, label: "Code" },
];

/**
 * This component is for Project page to switch tabs.
 * Currently project page supports two tabs:
 *  - Preview
 *  - Code
 *  * Upon selecting a tab, it will update the URL search params.
 */
export function PreviewOrCodeButton() {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeTab = React.useMemo(() => {
    const tab = searchParams.get(TAB_SEARCH_PARAM_QUERY_NAME);
    return tab ?? PREVIEW_TAB_SEARCH_PARAM;
  }, [searchParams]);

  const updateActiveTab = React.useCallback(
    (tabId: string) => {
      setSearchParams({ tab: tabId });
    },
    [setSearchParams],
  );

  return (
    <ButtonsOneActive
      onClick={updateActiveTab}
      activeButtonId={activeTab}
      buttons={tabs}
    />
  );
}
