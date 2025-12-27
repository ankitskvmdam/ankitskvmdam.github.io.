import { Settings } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { MediapipeInputs } from "~/layouts/mediapipe-inputs/inputs";

export function PreviewUpdateParamters() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="lg:hidden">
          <Settings /> Config
        </Button>
      </SheetTrigger>
      <SheetHeader className="hidden">
        <SheetTitle>Update model parameters</SheetTitle>
        <SheetDescription>
          You can update the model parameters here.
        </SheetDescription>
      </SheetHeader>
      <SheetContent>
        <div className="p-4 max-h-screen overflow-auto">
          <MediapipeInputs />
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
