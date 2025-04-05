import { useTimelineDrag } from "./useTImelineDrag";

export function AboutUsTimeline() {
  const { parentRef, childRef } = useTimelineDrag();

  return (
    <div ref={parentRef} className="timeline-container right-shadow">
      <div className="x-axis-line" />
      <div ref={childRef} className="timeline-wrapper">
        {Array.from({ length: 200 }).map((_, idx) => (
          <div key={idx} className="line" style={{ left: `${3 + idx}rem` }} />
        ))}
        {Array.from({ length: 10 }).map((_, idx) => (
          <div
            key={idx}
            className="anchor-line"
            style={{ left: `${idx * 20 + 3}rem` }}
          />
        ))}
      </div>
    </div>
  );
}
