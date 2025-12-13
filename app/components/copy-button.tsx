import { Check, Clipboard } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "~/components/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "~/components/ui/tooltip";
import { copyToClipboard } from "~/utils/copy";

export type TCopyButtonProps = {
  content: string;
};

export function CopyButton(props: TCopyButtonProps) {
  const { content } = props;
  const [showCheck, setShowCheck] = React.useState(false);
  const timeout = React.useRef<ReturnType<typeof setTimeout>>(null);
  const { t } = useTranslation("common");

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
    <Tooltip>
      <TooltipTrigger asChild>
        <Button size="icon" variant="ghost" onClick={handleClick}>
          {showCheck ? <Check /> : <Clipboard />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        {showCheck ? t("copied") : t("copy_code")}
      </TooltipContent>
    </Tooltip>
  );
}
