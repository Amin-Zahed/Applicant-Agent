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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

function DraftTable() {
  const { drafts, cloneDrafts, setDrafts, setCloneDrafts } = useAdd();

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
        {drafts.map((draft) => {
          const index = drafts.findIndex((Draft) => Draft.id === draft.id);
          // console.log(index);
          return (
            <TableRow key={draft.id}>
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
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Pencil className="cursor-pointer" />
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Edit task</AlertDialogTitle>
                      <AlertDialogDescription>
                        Make changes to it task here. Click Save changes when
                        you're done.
                      </AlertDialogDescription>
                      <br />
                      <form className="flex flex-col gap-2">
                        <Label htmlFor="jobPostingUrl2">Job posting URL</Label>
                        <Input
                          id="jobPostingUrl2"
                          type="url"
                          value={drafts[index].url}
                          onInput={(e) => {
                            setDrafts(index, {
                              ...drafts[index],
                              url: (e.target as HTMLInputElement).value,
                            });
                          }}
                        ></Input>
                        <Label>Instructions</Label>
                        <Textarea
                          onChange={(
                            e: React.ChangeEvent<HTMLTextAreaElement>
                          ) => {
                            setDrafts(index, {
                              ...drafts[index],
                              instruction: e.target.value,
                            });
                          }}
                          value={drafts[index].instruction}
                        ></Textarea>
                      </form>
                      <br />
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel
                        onClick={() => setDrafts(index, cloneDrafts[index])}
                      >
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction
                        disabled={
                          drafts[index].url !== cloneDrafts[index].url ||
                          drafts[index].instruction !==
                            cloneDrafts[index].instruction
                            ? false
                            : true
                        }
                        onClick={() => setCloneDrafts(index, drafts[index])}
                      >
                        Save changes
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
              <TableCell>
                <Trash2 className="cursor-pointer" />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default DraftTable;
