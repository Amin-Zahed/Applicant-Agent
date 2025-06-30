import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
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
import useScheduleForm from "@/stores/useScheduleForm";

const professions = [
  {
    value: "Software Engineer / Developer",
    label: "Software Engineer / Developer",
  },
  {
    value: "Designer(Graphic , UI/UX)",
    label: "Designer(Graphic , UI/UX)",
  },
  {
    value: "Product Manager",
    label: "Product Manager",
  },
  {
    value: "Project Manager",
    label: "Project Manager",
  },
  {
    value: "Data Scientist / Analyst",
    label: "Data Scientist / Analyst",
  },
  {
    value: "Engineer (Non-software, e.g., Electrical, ...)",
    label: "Engineer (Non-software, e.g., Electrical, ...)",
  },
  {
    value: "Marketing / Communications",
    label: "Marketing / Communications",
  },
  {
    value: "Sales / Business Development",
    label: "Sales / Business Development",
  },
  {
    value: "Human Resources / Recruiter",
    label: "Human Resources / Recruiter",
  },
  {
    value: "Finance / Accounting",
    label: "Finance / Accounting",
  },
];

function ComboBoxScheduleDemo({ ...props }) {
  const [open, setOpen] = React.useState(false);
  const { profession, setProfession } = useScheduleForm();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`justify-between ${props.inputWidth}`}
        >
          {profession
            ? professions.find((pro) => pro.value === profession)?.label
            : "What is your profession ?"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={`p-0 ${props.popoverWidth}`}>
        <Command>
          <CommandInput placeholder="Search profession..." className="h-9" />
          <CommandList>
            <CommandEmpty>No profession found.</CommandEmpty>
            <CommandGroup>
              {professions.map((pro) => (
                <CommandItem
                  key={pro.value}
                  value={pro.value}
                  onSelect={(currentValue) => {
                    setProfession(
                      currentValue === profession ? "" : currentValue
                    );
                    setOpen(false);
                  }}
                >
                  {pro.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      profession === pro.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default ComboBoxScheduleDemo;
