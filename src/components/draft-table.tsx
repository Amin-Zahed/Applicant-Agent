import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useAdd from "@/stores/useAdd";
import { useEffect } from "react";

const { drafts, setDrafts } = useAdd();

useEffect(() => {
  setDrafts([]);
}, [drafts]);

function DraftTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">URL</TableHead>
          <TableHead>Base Resume</TableHead>
          <TableHead className="text-right">Instructions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {drafts.map((d) => (
          <TableRow key={String(d.baseResume)}>
            <TableCell className="font-medium">{d.url}</TableCell>
            <TableCell>{d.baseResume ? String(d.baseResume) : "N/A"}</TableCell>
            <TableCell className="text-right">{d.instruction}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default DraftTable;
