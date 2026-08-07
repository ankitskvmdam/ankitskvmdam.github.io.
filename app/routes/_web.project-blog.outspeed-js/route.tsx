import { MetaFunction, useLoaderData } from "react-router";
import { ProjectShell } from "../_web.project-blog/project-shell";
import {
  getProjectPostMeta,
  loadProjectPost,
} from "../_web.project-blog/project-post";

const SLUG = "outspeed-js";

export function loader() {
  return loadProjectPost(SLUG);
}

export const meta: MetaFunction<typeof loader> = ({ data }) =>
  getProjectPostMeta(data);

export default function OutspeedJSRoute() {
  const post = useLoaderData<typeof loader>();

  return (
    <ProjectShell post={post} />
  );
}
