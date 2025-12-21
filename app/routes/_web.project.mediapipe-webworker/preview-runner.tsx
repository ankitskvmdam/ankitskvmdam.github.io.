import { Loader2 } from "lucide-react";
import { useGetCameraStream } from "~/hooks/use-get-camera-stream";
import { useStore } from "./store";
import React from "react";
import { PreviewRunnerView } from "./preview-runner-view";
import { StreamContainer } from "~/layouts/containers";
import { useSearchParams } from "react-router";
import {
  PREVIEW_TAB_SEARCH_PARAM,
  TAB_SEARCH_PARAM_QUERY_NAME,
} from "~/constants/search-params";

export function PreviewRunner() {
  const { stream, requestCameraStream, error, cleanup } = useGetCameraStream();
  const { inputVideoDevice } = useStore((state) => ({
    inputVideoDevice: state.inputVideoDevice,
  }));

  const [searchParams] = useSearchParams();

  React.useEffect(() => {
    const currentTab = searchParams.get(TAB_SEARCH_PARAM_QUERY_NAME);
    if (currentTab === PREVIEW_TAB_SEARCH_PARAM) {
      requestCameraStream({
        video: {
          deviceId: inputVideoDevice.id,
          height: { ideal: 1080 },
          width: { ideal: 1920 },
          frameRate: { ideal: 60 },
        },
      });
    } else {
      cleanup();
    }
  }, [inputVideoDevice, inputVideoDevice.id, searchParams, cleanup]);

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
