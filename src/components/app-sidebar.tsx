import * as React from "react";
import {
  Bell,
  UserPen,
  LayoutDashboard,
  ChartArea,
  FilePlus,
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
import useInfo from "@/stores/useInfo";
import { useIsMobile } from "@/hooks/use-mobile";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { sidebarIsOpen, toggleAppSidebar } = useAppSidebar();
  const { toggleSidebar } = useSidebar();
  const { portraitURL } = useInfo();
  const isMobile = useIsMobile();

  const data = {
    navMain: [
      {
        title: "Dashboard",
        url: "/dashboard",
        id: 1,
        icon: LayoutDashboard,
        // isActive: true,
      },
      {
        title: "Bio",
        url: "/dashboard/bio",
        id: 2,
        icon: UserPen,
        // isActive: true,
      },
      {
        title: "Analysis",
        url: "/dashboard/analysis",
        id: 3,
        icon: ChartArea,
        // isActive: true,
      },
      {
        title: "Add",
        url: "/add",
        id: 4,
        icon: FilePlus,
      },
      {
        title: "Notifications",
        url: "/notifications",
        id: 5,
        icon: Bell,
      },
    ],
    user: {
      name: sessionStorage.getItem("username")!,
      email: sessionStorage.getItem("email")!,
      avatar: portraitURL ? portraitURL : "https://github.com/shadcn.png",
      // avatar: "https://avatars.githubusercontent.com/u/166227862?v=4",
    },
  };

  return (
    <Sidebar
      collapsible="icon"
      className="h-full flex flex-col items-center"
      {...props}
    >
      {!isMobile && (
        <SidebarTrigger
          title={sidebarIsOpen ? "Close sidebar" : "Open sidebar"}
          className="cursor-pointer absolute top-0 right-0"
          onClick={() => {
            toggleAppSidebar();
            toggleSidebar();
          }}
        />
      )}
      <br />
      <br />
      <SidebarHeader></SidebarHeader>
      <SidebarContent className="flex flex-col justify-between">
        <div>
          <NavMain items={data.navMain} />
        </div>

        <div className="mb-16">
          <NavUser user={data.user} />
        </div>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}
