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
    drafts,
    setUrlInputValue,
    setTextAreaValue,
    addDraft,
    setBaseResumeSelectedStatus,
    setInstructionSelectedStatus,
    draftIdIncrese,
    makingUsableData,
    removeDrafts,
  } = useAdd();

  return (
    <div
      id="AddPage"
      className="w-full h-full flex flex-col overflow-y-auto scroll-auto"
    >
      <SidebarProvider
        defaultOpen={sidebarIsOpen ? true : false}
        className=" w-full h-full min-h-fit overflow-y-auto scroll-auto"
        // onOpenChange
      >
        <AppSidebar />
        <main>
          <SidebarTrigger
            className="cursor-pointer md:absolute md:hidden"
            // onClick={addToggleAppSidebar}
          />
          {/* <div
            className="p-4"
          ></div> */}
          <ResizablePanelGroup
            direction="horizontal"
            className="border h-full"
            style={{
              width: isMobile
                ? "100dvw"
                : isMobile === false && sidebarIsOpen === false
                ? "calc(100vw - (var(--sidebar-width-icon)))"
                : "calc(100vw - (var(--sidebar-width)))",
            }}
          >
            <ResizablePanel
              defaultSize={25}
              className="overflow-y-auto scroll-auto"
            >
              <div className="flex flex-col h-full p-6 gap-6 lg:gap-2 2xl:gap-6">
                <h1 className="text-2xl lg:text-lg 2xl:text-2xl font-bold text-center">
                  Add New Tasks
                </h1>
                <form className="flex flex-col gap-2 lg:gap-1 2xl:gap-2">
                  <p className="text-balance text-lg text-muted-foreground text-center">
                    Base info
                  </p>
                  <Label htmlFor="jobPostingUrl">Job posting URL</Label>
                  <Input
                    id="jobPostingUrl"
                    type="url"
                    value={urlInputValue === null ? "" : urlInputValue}
                    onInput={(e) =>
                      setUrlInputValue((e.target as HTMLInputElement).value)
                    }
                  ></Input>
                  <Label>Base resume</Label>
                  <ComboBoxBaseResume></ComboBoxBaseResume>
                </form>
                <form className="flex flex-col gap-2 2xl:gap-2 lg:gap-1">
                  <p className="text-balance text-lg text-muted-foreground text-center">
                    Instructions
                  </p>
                  <Label>Add instruction</Label>
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
                    setUrlInputValue("");
                    setInstructionSelectedStatus(null!);
                    setTextAreaValue("");
                    draftIdIncrese();
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
                <div id="table-container" className="w-full">
                  <DraftTable />
                </div>
                <Button
                  className="self-start"
                  disabled={drafts.length === 0 ? true : false}
                  onClick={() => {
                    makingUsableData();
                    removeDrafts();
                  }}
                >
                  Submit
                </Button>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </main>
      </SidebarProvider>
      {/* <br /> */}
    </div>
  );
};

export default Add;
