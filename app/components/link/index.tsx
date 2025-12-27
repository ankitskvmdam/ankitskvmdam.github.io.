import { isExternal } from "node:util/types";
import { Link as ReactRouterLink, LinkProps } from "react-router";

export type TLinkProps = LinkProps & {
  /**
   * If external then we will use `<a />` else we will use
   * `<Link />` component from react-router.
   *
   * @default false
   */
  isExternal?: boolean;
};

export function Link(props: TLinkProps) {
  const { isExternal, to, ...rest } = props;

  if (isExternal) {
    return <a href={typeof to === "string" ? to : ""} {...rest} />;
  }

  return <ReactRouterLink to={to} {...rest} />;
}
