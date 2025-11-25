import { Check, Clipboard } from "lucide-react";
import React from "react";
import { Button } from "~/components/ui/button";
import { copyToClipboard } from "~/utils/copy";

export type TCodeCopyButtonProps = {
  content: string;
};

export function CodeCopyButton(props: TCodeCopyButtonProps) {
  const { content } = props;
  const [showCheck, setShowCheck] = React.useState(false);
  const timeout = React.useRef<ReturnType<typeof setTimeout>>(null);

  const handleClick = React.useCallback(() => {
    copyToClipboard(content);
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setShowCheck(true);
    timeout.current = setTimeout(() => {
      setShowCheck(false);
    }, 2000);
  }, [content]);

  return (
    <Button
      size="icon"
      variant="ghost"
      className="[&>svg]:stroke-white absolute top-2 right-2 hover:bg-black/30"
      onClick={handleClick}
    >
      {showCheck ? <Check /> : <Clipboard />}
    </Button>
  );
}
