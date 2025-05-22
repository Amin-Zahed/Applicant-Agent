import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowUpDown,
  ChevronDown,
  CircleCheck,
  CircleX,
  Download,
  Loader,
  MoreHorizontal,
} from "lucide-react";

import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";
import useApplication, { Payment } from "@/stores/useApplication";
import useAdd from "@/stores/useAdd";

// export type Payment = {
//   id: string;
//   status: "pending" | "rejected" | "interview";
//   employee: string;
//   baseResume: string;
//   changedResume: string;
//   time: number;
// };

// const { data, deleteData } = useApplication();

export const columns: ColumnDef<Payment>[] = [
  // {
  // id: "state_icon",
  // header: ({ table }) => (
  //   <Checkbox
  //     checked={
  //       table.getIsAllPageRowsSelected() ||
  //       (table.getIsSomePageRowsSelected() && "indeterminate")
  //     }
  //     onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //     aria-label="Select all"
  //   />
  // ),
  // cell: ({ row }) =>
  // <Checkbox
  //   checked={row.getIsSelected()}
  //   onCheckedChange={(value) => row.toggleSelected(!!value)}
  //   aria-label="Select row"
  // />
  // row.original.status === "pending" ? (
  //   <Loader color="gray" />
  // ) : row.original.status === "interview" ? (
  //   <CircleCheck color="green" />
  // ) : (
  //   <CircleX color="red" />
  // ),
  // enableSorting: false,
  // enableHiding: false,
  // },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize flex flex-row flex-nowrap items-center">
        <span>
          {row.getValue("status") === "pending" ? (
            <Loader color="gray" />
          ) : row.getValue("status") === "interview" ? (
            <CircleCheck color="green" />
          ) : (
            <CircleX color="red" />
          )}
        </span>
        <span>{row.getValue("status")}</span>
      </div>
    ),
  },
  {
    accessorKey: "baseResume",
    header: "Base resume",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("baseResume")}</div>
    ),
  },
  {
    accessorKey: "changedResume",
    header: "Changed resume",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("changedResume")}</div>
    ),
  },
  {
    accessorKey: "employee",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Employee
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("employee")}</div>
    ),
  },
  {
    accessorKey: "time",
    header: "Time",
    cell: ({ row }) => <div className="capitalize">{row.getValue("time")}</div>,

    // Format the amount as a dollar amount
    // const formatted = new Intl.NumberFormat("en-US", {
    //   style: "currency",
    //   currency: "USD",
    // }).format(time);

    // return <div className="text-right font-medium">{formatted}</div>;
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;
      // const index = data.findIndex((Data) => Data.id === payment.id);
      // console.log(payment);

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
            // onClick={() => deleteData(index)}
            >
              <Trash2 /> Delete
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Pencil />
              Edit
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Download />
              Download changed resume
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

function DataTable() {
  const { data, updateData } = useApplication();
  const { usableData, removeUsableData } = useAdd();

  React.useEffect(() => {
    if (data.length <= 5) {
      updateData([
        {
          id: "m5gr84i9",
          time: 316,
          status: "pending",
          employee: "ken99@example.com",
          baseResume: "ewtretyryuy",
          changedResume: "sdgfdhfgjhj",
        },
        {
          id: "3u1reuv4",
          time: 242,
          status: "interview",
          employee: "Abe45@example.com",
          baseResume: "ewtretyryuy",
          changedResume: "sdgfdhfgjhj",
        },
        {
          id: "derv1ws0",
          time: 837,
          status: "pending",
          employee: "Monserrat44@example.com",
          baseResume: "ewtretyryuy",
          changedResume: "sdgfdhfgjhj",
        },
        {
          id: "5kma53ae",
          time: 874,
          status: "interview",
          employee: "Silas22@example.com",
          baseResume: "ewtretyryuy",
          changedResume: "sdgfdhfgjhj",
        },
        {
          id: "bhqecj4p",
          time: 721,
          status: "rejected",
          employee: "carmella@example.com",
          baseResume: "ewtretyryuy",
          changedResume: "sdgfdhfgjhj",
        },
      ]);
    }
  }, []);

  React.useEffect(() => {
    if (usableData.length !== 0) {
      const datas: Payment[] = usableData;
      updateData([...datas, ...data]);
    }
  }, [usableData]);

  React.useEffect(() => {
    if (usableData.length !== 0) removeUsableData();
  }, [data]);

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter employees..."
          value={
            (table.getColumn("employee")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("employee")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {/* {table.getFilteredSelectedRowModel().rows.length} of{" "} */}
          {table.getFilteredRowModel().rows.length} row(s)
          {/* selected. */}
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
      <Link to="/add">
        <Button variant="outline">Add +</Button>
      </Link>
    </div>
  );
}

export default DataTable;
