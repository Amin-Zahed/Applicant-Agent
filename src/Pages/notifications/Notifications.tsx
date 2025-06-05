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

const Notifications = () => {
  const { sidebarIsOpen } = useAppSidebar();
  const isMobile = useIsMobile();

  const notifications = [
    { id: 1, title: "Notification 1", content: "Content for notification 1" },
    { id: 2, title: "Notification 2", content: "Content for notification 2" },
    { id: 3, title: "Notification 3", content: "Content for notification 3" },
    { id: 4, title: "Notification 4", content: "Content for notification 4" },
    { id: 5, title: "Notification 5", content: "Content for notification 5" },
    { id: 6, title: "Notification 6", content: "Content for notification 6" },
    { id: 7, title: "Notification 7", content: "Content for notification 7" },
    { id: 8, title: "Notification 8", content: "Content for notification 8" },
    { id: 9, title: "Notification 9", content: "Content for notification 9" },
  ];

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
