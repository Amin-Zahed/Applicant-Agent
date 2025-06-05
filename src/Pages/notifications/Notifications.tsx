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

  return (
    <div
      id="notifications-page"
      // className="w-[320px] sm:w-[600px] md:w-[700px] lg:w-[950px] xl:w-[1150px] 2xl:w-[1200px] h-full overflow-y-auto scroll-auto"
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
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-10">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Notifications;
