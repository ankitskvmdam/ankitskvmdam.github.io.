import { Outlet } from "react-router";

export const handle = {
  i18n: ["projects", "blogs", "common"],
};

/**
 * Layout for the long-form project write-ups.
 *
 * It stays deliberately thin. A parent route cannot read its child's loader
 * data, so the page chrome that needs the post itself lives in `shell.tsx`,
 * which each write-up composes.
 */
export default function ProjectBlogLayout() {
  return (
    <div className="section relative">
      <div className="section-wrapper section-padding relative z-1">
        <Outlet />
      </div>
    </div>
  );
}
