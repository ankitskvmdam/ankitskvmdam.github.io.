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
import { Inputs } from "./inputs";

export function PreviewUpdateParamters() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
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
          <Inputs />
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
