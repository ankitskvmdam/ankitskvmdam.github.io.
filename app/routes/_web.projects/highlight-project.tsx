import { Slash } from "~/components/section/slash";
import { THighlightProject } from "./use-get-highlight-projects";
import { HighlightProjectLinks } from "./highlight-project-links";
import { HighlightProjectDescription } from "./highlight-project-description";

export type THighlightProjectProps = {
  item: THighlightProject;
};

export function HighlightProject(props: THighlightProjectProps) {
  const { item } = props;

  return (
    <div className="flex relative z-10 flex-col lg:flex-row" id={item.id}>
      <div className="md:max-w-lg relative flex-1 flex flex-col pt-4 lg:p-4">
        <div className="font-extrabold font-monospace text-layer-0 absolute z-1 top-0 text-7xl lg:text-9xl">
          {item.number}
        </div>
        <div className="relative flex flex-1 flex-col z-10 pl-10 lg:pl-20">
          <Slash component="inline">/projects/highlight/{item.id}</Slash>
          <div className="font-monospace font-bold text-2xl md:text-4xl">
            {item.title}
          </div>
          <HighlightProjectDescription
            className="hidden lg:block"
            descriptionKey={item.descriptionKey}
          />
          <HighlightProjectLinks
            className="hidden lg:flex"
            links={item.links}
            readMore={item.readMore}
          />
        </div>
      </div>
      <div className="flex-1 w-full relative z-10 pt-4 lg:min-h-96">
        <div className="flex h-full justify-end">
          <img
            src={item.thumbnail}
            className="h-full object-cover rounded-md"
          />
        </div>
      </div>
      <div className="pl-10 pt-4 lg:hidden">
        <HighlightProjectDescription descriptionKey={item.descriptionKey} />
        <HighlightProjectLinks links={item.links} readMore={item.readMore} />
      </div>
    </div>
  );
}
