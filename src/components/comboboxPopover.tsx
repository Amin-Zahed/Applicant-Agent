"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
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
  // AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { CloudUpload } from "lucide-react";

type Status = {
  value: string;
  label: string;
};

const statuses: Status[] = [
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
];

export function ComboboxPopover() {
  const [open, setOpen] = React.useState(false);
  const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(
    null
  );

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
                      setSelectedStatus(
                        statuses.find((priority) => priority.value === value) ||
                          null
                      );
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
        {/* <AlertDialogTrigger asChild>
          <Button variant="ghost">Show Dialog</Button>
        </AlertDialogTrigger> */}
        <AlertDialogContent className="flex flex-col items-center">
          <AlertDialogHeader className="flex flex-col items-center">
            <AlertDialogTitle className="">Upload Resume</AlertDialogTitle>
            <br />
            <div className="flex flex-col items-center">
              <CloudUpload
                size={200}
                strokeWidth={3}
                className="cursor-pointer"
              />
              <AlertDialogDescription>
                Choose a resume file from this device
              </AlertDialogDescription>
            </div>
            <br />
            <AlertDialogDescription>
              acceptable formats are : pdf, tex, md, odt, text, txt, docx.
            </AlertDialogDescription>
            <br />
            <Button variant="link" size="icon" className="text-2xl">
              Select a file from this device
            </Button>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setSelectedStatus(null)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction>Add +</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default ComboboxPopover;
