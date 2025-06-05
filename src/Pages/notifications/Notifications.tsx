import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useAppSidebar from "@/stores/useAppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
// import { useEffect } from "react";
import useNotifications from "@/stores/useNotifications";

const Notifications = () => {
  const { sidebarIsOpen } = useAppSidebar();
  const isMobile = useIsMobile();
  const { notifications } = useNotifications();

  return (
    <div
      id="notifications-page"
      className="w-full h-full flex flex-col overflow-auto scroll-auto"
    >
      <SidebarProvider
        defaultOpen={sidebarIsOpen ? true : false}
        className=" w-full min-h-fit h-full"
        // onOpenChange
      >
        <AppSidebar />
        <main
          className="grid justify-center h-full overflow-y-auto"
          style={{
            width: isMobile
              ? "100dvw"
              : isMobile === false && sidebarIsOpen === false
              ? "calc(100vw - (var(--sidebar-width-icon)))"
              : "calc(100vw - (var(--sidebar-width)))",
          }}
        >
          <SidebarTrigger className="cursor-pointer md:absolute md:hidden" />
          <div
            id="notifications-container"
            className="h-full lg:py-6 px-3 md:px-0"
            style={{
              width: isMobile
                ? "100dvw"
                : !isMobile && !sidebarIsOpen
                ? "calc((100vw/2) - (var(--sidebar-width-icon)))"
                : "calc((100vw/2) - (var(--sidebar-width)))",
            }}
          >
            <Accordion type="single" collapsible className="w-full">
              {notifications.map((notification) => (
                <AccordionItem
                  value={`item-${notification.id}`}
                  key={notification.id}
                >
                  <AccordionTrigger>{notification.title}</AccordionTrigger>
                  <AccordionContent>{notification.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Notifications;
