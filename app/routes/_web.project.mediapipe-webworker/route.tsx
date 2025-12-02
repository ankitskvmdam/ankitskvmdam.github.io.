import React from "react";
import { ButtonsOneActive } from "~/components/buttons-one-active";

export default function MediaPipeWebworker() {
  const [activeButtonId, setActiveButtonId] = React.useState("preview");

  return (
    <div className="section relative">
      <div className="section-wrapper section-min-h-available-screen section-padding relative z-1">
        <ButtonsOneActive
          onClick={setActiveButtonId}
          activeButtonId={activeButtonId}
          buttons={[
            { id: "preview", label: "Preview" },
            { id: "code", label: "Code" },
          ]}
        />

        <h1 className="text-7xl font-bold">Page Under Construction!</h1>
      </div>
    </div>
  );
}
