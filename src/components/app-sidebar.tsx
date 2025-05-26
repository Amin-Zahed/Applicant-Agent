import * as React from "react";
import {
  BookOpen,
  Bot,
  SquareTerminal,
  ChartArea,
  SquarePlus,
} from "lucide-react";
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
import { NavUser } from "./nav-user";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      id: 1,
      icon: SquareTerminal,
      // isActive: true,
    },
    {
      title: "Bio",
      url: "/dashboard/info",
      id: 2,
      icon: Bot,
      // isActive: true,
    },
    {
      title: "Info chart",
      url: "/dashboard/chart",
      id: 3,
      icon: ChartArea,
      // isActive: true,
    },
    {
      title: "Add +",
      url: "/add",
      id: 4,
      icon: SquarePlus,
    },
    {
      title: "Notifications",
      url: "/notifications",
      id: 5,
      icon: BookOpen,
    },
  ],
  user: {
    name: sessionStorage.getItem("username")!,
    email: sessionStorage.getItem("email")!,
    avatar: "https://github.com/shadcn.png",
    // avatar: "https://avatars.githubusercontent.com/u/166227862?v=4",
  },
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
      <SidebarContent className="flex flex-col justify-around">
        <div>
          <NavMain items={data.navMain} />
        </div>

        <div>
          <NavUser user={data.user} />
        </div>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}
