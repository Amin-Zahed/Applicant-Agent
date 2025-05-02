// import * as React from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import useAdd from "@/stores/useAdd";

// function ComboBoxInstruction() {
//   const [open, setOpen] = React.useState(false);
//   const { statuses, selectedStatus, setStatuses, setSelectedStatus } = useAdd();

//   React.useEffect(() => {
//     setStatuses([
//       {
//         value: "backlog",
//         label: "Backlog",
//       },
//       {
//         value: "todo",
//         label: "Todo",
//       },
//       {
//         value: "in progress",
//         label: "In Progress",
//       },
//       {
//         value: "done",
//         label: "Done",
//       },
//       {
//         value: "canceled",
//         label: "Canceled",
//       },
//     ]);
//   }, []);

//   return (
//     <div className="flex items-center space-x-4">
//       <Popover open={open} onOpenChange={setOpen}>
//         <PopoverTrigger asChild>
//           <Button variant="outline" className="w-full justify-start">
//             {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set status</>}
//           </Button>
//         </PopoverTrigger>
//         <PopoverContent className="p-0" side="right" align="start">
//           <Command>
//             <CommandInput placeholder="Change status..." />
//             <CommandList>
//               <CommandEmpty>No results found.</CommandEmpty>
//               <CommandGroup>
//                 {statuses.map((status) => (
//                   <CommandItem
//                     key={status.value}
//                     value={status.value}
//                     onSelect={(value) => {
//                       setSelectedStatus(value);
//                       setOpen(false);
//                     }}
//                   >
//                     {status.label}
//                   </CommandItem>
//                 ))}
//               </CommandGroup>
//             </CommandList>
//           </Command>
//         </PopoverContent>
//       </Popover>
//     </div>
//   );
// }

// export default ComboBoxInstruction;
