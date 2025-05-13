import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useAdd from "@/stores/useAdd";
import { Pencil, Trash2 } from "lucide-react";

function DraftTable() {
  const { drafts } = useAdd();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">URL</TableHead>
          <TableHead>Base Resume</TableHead>
          <TableHead className="text-left">Instructions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {drafts.map((draft) => (
          <TableRow key={draft.resume}>
            <TableCell className="font-medium" title={draft.url!}>
              {draft.url}
            </TableCell>
            <TableCell title={draft.resume!}>{draft.resume}</TableCell>
            <TableCell
              className="text-left"
              title={
                draft.instruction !== "" ? String(draft.instruction) : "N/A"
              }
            >
              {draft.instruction !== "" ? draft.instruction : "N/A"}
            </TableCell>
            <TableCell>
              <Pencil />
            </TableCell>
            <TableCell>
              <Trash2 />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default DraftTable;
