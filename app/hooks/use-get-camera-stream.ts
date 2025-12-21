import React from "react";

export function useGetCameraStream() {
  const isRequesting = React.useRef(false);
  const [stream, setStream] = React.useState<MediaStream | null>(null);
  const streamRef = React.useRef<MediaStream | null>(null);
  const [error, setError] = React.useState<unknown>(null);

  const requestCameraStream = React.useCallback(
    async (constraints: MediaStreamConstraints) => {
      setError(null);
      if (isRequesting.current) return;

      isRequesting.current = true;
      try {
        const newStream =
          await navigator.mediaDevices.getUserMedia(constraints);

        if (streamRef.current) {
          streamRef.current.getTracks().forEach((track) => track.stop());
        }

        streamRef.current = newStream;
        setStream(newStream);
      } catch (error) {
        setError(error);
        console.error("Error accessing camera:", error);
      } finally {
        isRequesting.current = false;
      }
    },
    [],
  );

  const cleanup = React.useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setStream(null);
  }, []);

  return {
    stream,
    requestCameraStream,
    cleanup,
    error,
  };
}
