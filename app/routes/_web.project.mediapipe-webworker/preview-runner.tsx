import { Loader2 } from "lucide-react";
import { useGetCameraStream } from "~/hooks/use-get-camera-stream";
import React from "react";
import { PreviewRunnerView } from "./preview-runner-view";
import { StreamContainer } from "~/layouts/containers";
import { useSearchParams } from "react-router";
import {
  CODE_TAB_SEARCH_PARAM,
  PREVIEW_TAB_SEARCH_PARAM,
  TAB_SEARCH_PARAM_QUERY_NAME,
} from "~/constants/search-params";
import { useInputDevice } from "~/layouts/select-input-video-device/store";

export function PreviewRunner() {
  const { stream, requestCameraStream, error, cleanup } = useGetCameraStream();
  const { deviceId } = useInputDevice((state) => ({
    deviceId: state.selectedInputDevice.value,
  }));

  const [searchParams] = useSearchParams();

  React.useEffect(() => {
    if (
      searchParams.get(TAB_SEARCH_PARAM_QUERY_NAME) === PREVIEW_TAB_SEARCH_PARAM
    ) {
      requestCameraStream({
        video: {
          deviceId,
          height: { ideal: 1080 },
          width: { ideal: 1920 },
          frameRate: { ideal: 60 },
        },
      });
    }
  }, [deviceId, searchParams]);

  React.useEffect(() => {
    if (
      searchParams.get(TAB_SEARCH_PARAM_QUERY_NAME) === CODE_TAB_SEARCH_PARAM
    ) {
      // Cleanup previous stream
      cleanup();
    }
  }, [cleanup, searchParams]);

  React.useEffect(() => {
    return () => {
      cleanup();
    };
  }, [cleanup]);

  if (!stream && !error) {
    return (
      <StreamContainer>
        <div className="bg-layer-1 h-full w-full rounded-lg flex items-center justify-center">
          <div className="gap-x-2 inline-flex items-center">
            <Loader2 className="size-4 animate-spin" />
            <span>Loading</span>
          </div>
        </div>
      </StreamContainer>
    );
  }

  if (error || !stream) {
    return (
      <StreamContainer>
        <div className="bg-layer-1 h-full w-full rounded-lg flex items-center justify-center">
          <div className="gap-x-2 inline-flex items-center p-2">
            <span className="text-red-600 dark:text-red-400 text-center">
              Unable to access camera, please refresh the page.
            </span>
          </div>
        </div>
      </StreamContainer>
    );
  }

  return <PreviewRunnerView stream={stream} />;
}
