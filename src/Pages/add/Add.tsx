import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import useAppSidebar from "@/stores/useAppSidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ComboBoxBaseResume from "@/components/comboBoxBaseResume";
import ComboBoxInstruction from "@/components/comboBoxInstruction";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import useAdd from "@/stores/useAdd";
import DraftTable from "@/components/draft-table";

const Add = () => {
  const { sidebarIsOpen } = useAppSidebar();
  const isMobile = useIsMobile();
  const {
    baseResumeSelectedStatus,
    urlInputValue,
    textAreaValue,
    setUrlInputValue,
    setTextAreaValue,
    addDraft,
    setBaseResumeSelectedStatus,
    setInstructionSelectedStatus,
  } = useAdd();

  return (
    <div
      id="AddPage"
      className="w-full h-full flex flex-col overflow-auto scroll-auto"
    >
      <SidebarProvider className=" w-full min-h-0 h-full">
        <AppSidebar />
        <main>
          <SidebarTrigger className="cursor-pointer md:absolute md:hidden" />
          {/* <div
            className="p-4"
          ></div> */}
          <ResizablePanelGroup
            direction="horizontal"
            className="border h-full"
            style={{
              width: isMobile
                ? "100dvw"
                : isMobile === false && sidebarIsOpen
                ? "calc(100vw - (var(--sidebar-width-icon)))"
                : "calc(100vw - (var(--sidebar-width)))",
            }}
          >
            <ResizablePanel
              defaultSize={25}
              className="overflow-auto scroll-auto"
            >
              <div className="flex flex-col h-full p-6 gap-6">
                <h1 className="text-2xl font-bold text-center">
                  Add New Tasks
                </h1>
                <form className="flex flex-col gap-2">
                  <p className="text-balance text-lg text-muted-foreground text-center">
                    Base info
                  </p>
                  <Label htmlFor="jobPostingUrl">Job posting URL</Label>
                  <Input
                    id="jobPostingUrl"
                    type="url"
                    value={urlInputValue ?? ""}
                    onInput={(e) =>
                      setUrlInputValue((e.target as HTMLInputElement).value)
                    }
                  ></Input>
                  <Label>Base resume</Label>
                  <ComboBoxBaseResume></ComboBoxBaseResume>
                </form>
                <form className="flex flex-col gap-2">
                  <p className="text-balance text-lg text-muted-foreground text-center">
                    Instructions
                  </p>
                  <Label htmlFor="jobPostingUrl">Add instruction</Label>
                  <ComboBoxInstruction></ComboBoxInstruction>
                  <Label>Instructions</Label>
                  <Textarea
                    onChange={(e) => setTextAreaValue(e.target.value)}
                    value={textAreaValue}
                  ></Textarea>
                </form>
                <Button
                  disabled={
                    baseResumeSelectedStatus === null ||
                    typeof urlInputValue !== "string"
                      ? true
                      : false
                  }
                  onClick={() => {
                    addDraft();
                    setBaseResumeSelectedStatus(null!);
                    setUrlInputValue(null!);
                    setInstructionSelectedStatus(null!);
                    setTextAreaValue("");
                  }}
                >
                  Add To Draft
                </Button>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel
              defaultSize={75}
              className="overflow-auto scroll-auto"
            >
              <div className="flex flex-col h-full p-6 gap-6 items-center">
                <h1 className="text-2xl font-bold text-center">Draft</h1>
                <div id="table-container" className="w-[500px]">
                  <DraftTable></DraftTable>
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </main>
      </SidebarProvider>
      <br />
    </div>
  );
};

export default Add;
