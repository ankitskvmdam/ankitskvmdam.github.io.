import { getDisplayDate } from "~/mdx/utils";
import { cn } from "~/lib/utils";
import { buttonVariants } from "~/components/ui/button";
import { DirectoryArrowLine } from "../icons";
import { Link } from "../link";

export type TListItemAction = {
  id: string;
  label: string;
  to: string;
  isExternal?: boolean;
  /** The one action the entry is really about. Rendered more prominently. */
  isPrimary?: boolean;
};

export type TListItem = {
  id: string;
  title: string;
  description: string;
  dateString?: string;
  /**
   * Where the entry can take you. An entry may have more than one
   * destination — a demo and a write-up about it, say — which is why these
   * are buttons rather than the whole row being one link.
   */
  actions: TListItemAction[];
};

export type TListProps = {
  items: TListItem[];
};

export function List(props: TListProps) {
  const { items } = props;

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <div className="rounded-md px-4 py-4">
            {item.dateString && (
              <div className="mb-0 flex items-center gap-2 pl-1">
                <DirectoryArrowLine className="-scale-y-100 mt-1 text-muted-foreground" />
                <span className="text-xs uppercase">
                  {getDisplayDate(item.dateString)}
                </span>
              </div>
            )}

            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-muted-foreground">{item.description}</p>

            {item.actions.length > 0 && (
              <div className="mt-4 flex flex-wrap items-center justify-end gap-2">
                {item.actions.map((action) => (
                  <Link
                    key={action.id}
                    to={action.to}
                    isExternal={action.isExternal}
                    className={cn(
                      buttonVariants({
                        variant: action.isPrimary ? "outline" : "ghost",
                        size: "sm",
                      }),
                      "font-bold",
                    )}
                  >
                    {action.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <hr className="mx-4 my-4" />
        </li>
      ))}
    </ul>
  );
}
