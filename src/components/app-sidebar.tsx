import * as React from "react";
import { BookOpen, Bot, SquareTerminal } from "lucide-react";
import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import useAppSidebar from "@/stores/useAppSidebar";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      id: 1,
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Bio",
      url: "/dashboard/info",
      id: 1,
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Info chart",
      url: "/dashboard/chart",
      id: 1,
      icon: SquareTerminal,
      // isActive: true,
    },
    {
      title: "Add +",
      url: "/add",
      id: 2,
      icon: Bot,
    },
    {
      title: "Notifications",
      url: "/notifications",
      id: 3,
      icon: BookOpen,
    },
  ],
};
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { toggleAppSidebar } = useAppSidebar();
  const { toggleSidebar } = useSidebar();

  return (
    <Sidebar
      collapsible="icon"
      className="h-full flex flex-col items-center"
      {...props}
    >
      <SidebarTrigger
        className="cursor-pointer absolute top-0 right-0"
        onClick={() => {
          toggleAppSidebar();
          toggleSidebar();
        }}
      />{" "}
      <br />
      <br />
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
    </Sidebar>
  );
}
