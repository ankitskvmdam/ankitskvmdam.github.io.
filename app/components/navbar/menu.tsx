import { DesktopMenu } from "./desktop";
import { HamMenu } from "./ham";

export function Menu() {
  return (
    <div className="flex flex-1 justify-start pl-4">
      <DesktopMenu />
      <HamMenu />
    </div>
  );
}
