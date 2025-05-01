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
import ComboboxPopover from "@/components/comboboxPopover";

const Add = () => {
  const { sidebarIsOpen } = useAppSidebar();
  const isMobile = useIsMobile();

  return (
    <div id="profile" className="w-full h-full flex flex-col overflow-auto">
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
            <ResizablePanel defaultSize={25}>
              <div className="flex flex-col h-full p-6 gap-6">
                <h1 className="text-2xl font-bold text-center">
                  Add New Tasks
                </h1>
                <form className="flex flex-col gap-2">
                  <p className="text-balance text-lg text-muted-foreground text-center">
                    Base info
                  </p>
                  <Label htmlFor="jobPostingUrl">Job posting URL</Label>
                  <Input id="jobPostingUrl" type="url"></Input>
                  <Label>Base resume</Label>
                  <ComboboxPopover></ComboboxPopover>
                </form>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={75}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Content</span>
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
