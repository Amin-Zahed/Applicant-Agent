import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import useAppSidebar from "@/stores/useAppSidebar";
import { useIsMobile } from "@/hooks/use-mobile";

const Add = () => {
  const { sidebarIsOpen } = useAppSidebar();
  const isMobile = useIsMobile();

  return (
    <div id="profile" className="w-full h-full flex flex-col overflow-auto">
      <SidebarProvider className=" w-full min-h-0 h-full">
        <AppSidebar />
        <main>
          <SidebarTrigger className="cursor-pointer md:absolute md:hidden" />
          <div
            className="p-4"
            style={{
              width: isMobile
                ? "100dvw"
                : isMobile === false && sidebarIsOpen
                ? "calc(100vw - (var(--sidebar-width-icon)))"
                : "calc(100vw - (var(--sidebar-width)))",
            }}
          ></div>
        </main>
      </SidebarProvider>
      <br />
    </div>
  );
};

export default Add;
