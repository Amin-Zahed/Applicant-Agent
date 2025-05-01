import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import useAppSidebar from "@/stores/useAppSidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

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
              <div className="flex flex-col h-full p-6">
                <div className="flex flex-col items-center gap-2 text-center">
                  <h1 className="text-2xl font-bold">Add new tasks</h1>
                  <p className="text-balance text-sm text-muted-foreground">
                    Base info
                  </p>
                </div>
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
