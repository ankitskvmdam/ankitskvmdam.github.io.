import { SelectInputDevice } from "~/layouts/select-input-video-device";
import { PreviewViewParameters } from "./preview-view-parameters";
import { PreviewUpdateParamters } from "./preview-update-parameters";
import { PreviewRunner } from "./preview-runner";
import { useSearchParams } from "react-router";
import {
  PREVIEW_TAB_SEARCH_PARAM,
  TAB_SEARCH_PARAM_QUERY_NAME,
} from "~/constants/search-params";

export function PreviewMain() {
  const [searchParams] = useSearchParams();
  return (
    <div>
      <div className="flex justify-between gap-x-2">
        {searchParams.get(TAB_SEARCH_PARAM_QUERY_NAME) ===
          PREVIEW_TAB_SEARCH_PARAM && (
          <div>
            <SelectInputDevice />
          </div>
        )}
        <PreviewViewParameters />
        <PreviewUpdateParamters />
      </div>

      <div className="text-muted-foreground py-4">
        <PreviewRunner />
      </div>
    </div>
  );
}
