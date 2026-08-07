import React from "react";
import { cn } from "~/lib/utils";

export type TStreamVideoPlayerProps = {
  stream: MediaStream;
  onVideoReady?: (video: HTMLVideoElement) => void;
  className?: string;
};

export function StreamVideoPlayer(props: TStreamVideoPlayerProps) {
  const ref = React.useRef<HTMLVideoElement>(null);
  const { stream, onVideoReady, className } = props;

  React.useEffect(() => {
    const video = ref.current;

    if (!stream || !video) return;

    const onCanPlay = () => onVideoReady?.(video);

    video.addEventListener("canplay", onCanPlay);
    video.srcObject = stream;

    // A stream that is already playing will not fire `canplay` again.
    if (video.readyState >= 2) {
      onVideoReady?.(video);
    }

    return () => {
      video.removeEventListener("canplay", onCanPlay);
    };
  }, [stream, onVideoReady]);

  return (
    <div className="w-full h-full">
      <video
        className={cn(
          "h-full w-full rounded-lg will-change-transform -scale-x-100 object-cover",
          className,
        )}
        ref={ref}
        autoPlay
        playsInline
        muted
      />
    </div>
  );
}
