import * as React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { CloudUpload } from "lucide-react";
import useAdd from "@/stores/useAdd";
import { Input } from "./ui/input";

function ComboBoxBaseResume() {
  const [open, setOpen] = React.useState(false);
  const {
    baseResumeStatuses,
    baseResumeSelectedStatus,
    fileInputValue,
    setFileInputValue,
    setBaseResumeStatuses,
    baseResumeAddStatus,
    setBaseResumeSelectedStatus,
  } = useAdd();

  const inputRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    setBaseResumeStatuses([
      {
        value: "backlog",
        label: "Backlog",
      },
      {
        value: "todo",
        label: "Todo",
      },
      {
        value: "in progress",
        label: "In Progress",
      },
      {
        value: "done",
        label: "Done",
      },
      {
        value: "canceled",
        label: "Canceled",
      },
      {
        value: "upload",
        label: "Upload New Resume ...",
      },
    ]);
  }, []);

  return (
    <div className="flex items-center space-x-4">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full justify-start">
            {baseResumeSelectedStatus ? (
              <>{baseResumeSelectedStatus.label}</>
            ) : (
              <>+ Add a file ...</>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" side="right" align="start">
          <Command>
            <CommandInput placeholder="Change file..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {baseResumeStatuses.map((status) => (
                  <CommandItem
                    key={status.value}
                    value={status.value}
                    onSelect={(value) => {
                      setBaseResumeSelectedStatus(value);
                      setOpen(false);
                    }}
                  >
                    {status.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <AlertDialog
        defaultOpen={false}
        open={baseResumeSelectedStatus?.value === "upload" ? true : false}
      >
        <AlertDialogContent className="flex flex-col items-center justify-center overflow-auto scroll-auto">
          <AlertDialogHeader className="flex flex-col items-center">
            <AlertDialogTitle className="">Upload Resume</AlertDialogTitle>
            <br />
            <div className="flex flex-col items-center">
              <Label className="flex flex-col items-center">
                <Input
                  type="file"
                  accept=".pdf, .tex, .md, .odt, .text, .txt, .docx"
                  className="w-0 h-0 opacity-0"
                  ref={inputRef}
                  onInput={(e) =>
                    setFileInputValue((e.target as HTMLInputElement).value)
                  }
                ></Input>
                <span className="items-center">
                  <CloudUpload
                    size={200}
                    strokeWidth={3}
                    className="cursor-pointer"
                    style={{ color: fileInputValue ? "green" : undefined }}
                  />
                </span>
              </Label>
              <AlertDialogDescription>
                Choose a resume file from this device
              </AlertDialogDescription>
            </div>
            <br />
            <AlertDialogDescription>
              acceptable formats are : pdf, tex, md, odt, text, txt, docx.
            </AlertDialogDescription>
            <br />
            <Button
              variant="link"
              size="icon"
              className="text-2xl"
              onClick={() => inputRef.current?.click()}
            >
              Select a file from this device
            </Button>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => setBaseResumeSelectedStatus(null!)}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              disabled={fileInputValue ? false : true}
              onClick={() => {
                baseResumeAddStatus();
                setBaseResumeSelectedStatus(baseResumeStatuses[0].value);
              }}
            >
              Finish
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default ComboBoxBaseResume;
