import React from "react";

type TMouseOrTouchEvent = MouseEvent | TouchEvent;

function getClientXAndYFromEvent(event: TMouseOrTouchEvent): {
  x: number;
  y: number;
} {
  if ("clientX" in event && "clientY" in event) {
    return {
      x: event.clientX,
      y: event.clientY,
    };
  }

  return {
    x: event.touches[0].clientX,
    y: event.touches[0].clientY,
  };
}

const defaultWhenDragStarted = {
  client: {
    x: -1,
    y: -1,
  },
  childRect: {
    x: 0,
    y: 0,
    width: 0,
    scrollWidth: 0,
  },
  isSet: false,
};

export function useTimelineDrag() {
  const parentRef = React.useRef<HTMLDivElement>(null);
  const childRef = React.useRef<HTMLDivElement>(null);
  const dataWhenDragStarted = React.useRef(defaultWhenDragStarted);

  const handleOnDragging = React.useCallback((event: TMouseOrTouchEvent) => {
    if (!parentRef.current || !childRef.current) return;

    const { x, y } = getClientXAndYFromEvent(event);

    if (!dataWhenDragStarted.current.isSet) {
      console.log("Setting everything", childRef.current.scrollWidth);
      const {
        width: childWidth,
        left: childX,
        top: childY,
      } = childRef.current.getBoundingClientRect();

      dataWhenDragStarted.current.childRect = {
        width: childWidth,
        x: childX,
        y: childY,
        scrollWidth: childRef.current.scrollWidth,
      };

      dataWhenDragStarted.current.client = {
        x,
        y,
      };
      dataWhenDragStarted.current.isSet = true;
      return;
    }

    const delta = x - dataWhenDragStarted.current.client.x;
    const childInitialX = dataWhenDragStarted.current.childRect.x;
    const width = dataWhenDragStarted.current.childRect.width;
    const scrollWidth = dataWhenDragStarted.current.childRect.scrollWidth;

    if (delta + childInitialX >= 0) {
      console.log("Condition 1");
      childRef.current.style.transform = "translateX(0)";
      parentRef.current.classList.remove("left-shadow");
      return;
    }

    if (Math.abs(delta + childInitialX - width) >= scrollWidth) {
      console.log("Condition 2", delta, childInitialX, width, scrollWidth);
      childRef.current.style.transform = `translateX(-${
        scrollWidth - width + 20
      }px)`;

      parentRef.current.classList.remove("right-shadow");
      return;
    }

    parentRef.current.classList.add("right-shadow", "left-shadow");
    childRef.current.style.transform = `translateX(${childInitialX + delta}px)`;
  }, []);

  const handleOnDragStart = React.useCallback(() => {
    if (!parentRef.current) return;
    parentRef.current.classList.add("dragging");
    parentRef.current.addEventListener("mousemove", handleOnDragging);
    parentRef.current.addEventListener("touchmove", handleOnDragging);
  }, []);

  const handleOnDragEnd = React.useCallback(() => {
    if (!parentRef.current) return;
    dataWhenDragStarted.current.isSet = false;
    parentRef.current.classList.remove("dragging");
    parentRef.current.removeEventListener("mousemove", handleOnDragging);
    parentRef.current.removeEventListener("touchmove", handleOnDragging);
  }, []);

  React.useEffect(() => {
    if (!parentRef.current) return;

    parentRef.current.addEventListener("mousedown", handleOnDragStart);
    parentRef.current.addEventListener("mouseup", handleOnDragEnd);
    parentRef.current.addEventListener("mouseleave", handleOnDragEnd);

    parentRef.current.addEventListener("touchstart", handleOnDragStart);
    parentRef.current.addEventListener("touchend", handleOnDragEnd);
    parentRef.current.addEventListener("touchcancel", handleOnDragEnd);

    return () => {
      if (parentRef.current) {
        parentRef.current.removeEventListener("mousedown", handleOnDragStart);
        parentRef.current.removeEventListener("mouseup", handleOnDragEnd);
        parentRef.current.removeEventListener("mouseleave", handleOnDragEnd);

        parentRef.current.removeEventListener("touchstart", handleOnDragStart);
        parentRef.current.removeEventListener("touchend", handleOnDragEnd);
        parentRef.current.removeEventListener("touchcancel", handleOnDragEnd);
      }
    };
  }, []);

  return {
    parentRef,
    childRef,
  };
}
