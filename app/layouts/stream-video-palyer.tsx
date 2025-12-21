import React from "react";
import { cn } from "~/lib/utils";

export type TStreamVideoPlayerProps = {
  stream: MediaStream;
  onVideoReady?: () => void;
  className?: string;
};

export function StreamVideoPlayer(props: TStreamVideoPlayerProps) {
  const ref = React.useRef<HTMLVideoElement>(null);
  const { stream, onVideoReady, className } = props;

  React.useEffect(() => {
    function onCanPlay() {
      onVideoReady?.();
    }

    if (!stream || !ref.current) return;

    ref.current.addEventListener("canplay", onCanPlay);
    ref.current.srcObject = stream;

    return () => {
      ref.current?.removeEventListener("canplay", onCanPlay);
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
