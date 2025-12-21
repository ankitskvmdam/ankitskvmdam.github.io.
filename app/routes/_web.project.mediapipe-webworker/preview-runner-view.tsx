import { StreamContainer } from "~/layouts/containers";
import { StreamVideoPlayer } from "~/layouts/stream-video-palyer";

export type TPreviewRunnerViewProps = {
  stream: MediaStream;
};

export function PreviewRunnerView(props: TPreviewRunnerViewProps) {
  const { stream } = props;
  return (
    <StreamContainer>
      <StreamVideoPlayer stream={stream} />
    </StreamContainer>
  );
}
