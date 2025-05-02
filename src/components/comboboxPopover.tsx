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

export function ComboboxPopover() {
  const [open, setOpen] = React.useState(false);
  const {
    statuses,
    selectedStatus,
    fileInputValue,
    setFileInputValue,
    setStatuses,
    setSelectedStatus,
    addStatus,
  } = useAdd();

  const inputRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    setStatuses([
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
            {selectedStatus ? (
              <>{selectedStatus.label}</>
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
                {statuses.map((status) => (
                  <CommandItem
                    key={status.value}
                    value={status.value}
                    onSelect={(value) => {
                      setSelectedStatus(value);
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
        open={selectedStatus?.value === "upload" ? true : false}
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
            <AlertDialogCancel onClick={() => setSelectedStatus(null!)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              disabled={fileInputValue ? false : true}
              onClick={() => {
                addStatus();
                setSelectedStatus(statuses[0].value);
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

export default ComboboxPopover;
