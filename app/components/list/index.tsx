import { title } from "node:process";
import { getDisplayDate } from "~/mdx/utils";
import { DirectoryArrowLine } from "../icons";
import { Link } from "../link";

export type TListItem = {
  id: string;
  title: string;
  description: string;
  dateString?: string;
  link: {
    to: string;
    isExternal?: boolean;
  };
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
          <Link
            className="block px-4 py-4 rounded-md cursor-pointer hover:bg-muted/40"
            {...item.link}
          >
            {item.dateString && (
              <div className="mb-0 flex items-center gap-2 pl-1">
                <DirectoryArrowLine className="-scale-y-100 mt-1 text-muted-foreground" />
                <span className="uppercase text-xs">
                  {getDisplayDate(item.dateString)}
                </span>
              </div>
            )}
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-muted-foreground">{item.description}</p>
          </Link>

          <hr className="my-4 mx-4" />
        </li>
      ))}
    </ul>
  );
}
