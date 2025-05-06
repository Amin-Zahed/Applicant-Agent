import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useAdd from "@/stores/useAdd";
// import { useEffect } from "react";

function DraftTable() {
  const { drafts } = useAdd();

  //   useEffect(() => {
  //     setDrafts(drafts);
  //   }, [drafts]);

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
        {drafts.map((draft) => (
          <TableRow key={draft.resume}>
            <TableCell className="font-medium">{draft.url}</TableCell>
            <TableCell>{draft.resume}</TableCell>
            <TableCell className="text-right">{draft.instruction}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default DraftTable;
