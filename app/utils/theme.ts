import { THEME_SEARCH_PARAM } from "~/constants/searchparams";

export function getThemeUsingURLSearch(
  searchOrSearchParams: string | URLSearchParams
) {
  const sp =
    typeof searchOrSearchParams === "string"
      ? new URLSearchParams(searchOrSearchParams)
      : searchOrSearchParams;

  return sp.get(THEME_SEARCH_PARAM);
}
