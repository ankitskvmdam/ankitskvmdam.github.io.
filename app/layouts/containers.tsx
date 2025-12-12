export type TProjectPageContainerProps = {
  top?: React.ReactNode;
  bottom?: React.ReactNode;
};

export function ProjectPageContainer(props: TProjectPageContainerProps) {
  const { top, bottom } = props;
  return (
    <div className="flex-1 flex flex-col">
      {top}
      <div className="flex-1 flex">{bottom}</div>
    </div>
  );
}

export type TProjectMainContainerProps = {
  left?: React.ReactNode;
  right?: React.ReactNode;
};

export function ProjectMainContainer(props: TProjectMainContainerProps) {
  const { left, right } = props;
  return (
    <div className="flex flex-1 flex-col lg:flex-row">
      <div className="pb-2 border-muted border-b lg:border-b-0 lg:border-r lg:max-w-md lg:pr-4">
        {left}
      </div>
      <div className=" flex-1 pt-2 lg:p-4">{right}</div>
    </div>
  );
}

export type TProjectHeadingAndDescContainerProps = {
  heading: string;
  description: string;
};

export function ProjectHeadingAndDescContainer(
  props: TProjectHeadingAndDescContainerProps,
) {
  const { heading, description } = props;
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-semibold font-monospace">{heading}</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
