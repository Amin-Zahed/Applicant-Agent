import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DataTable from "@/components/data-table";
import { TabsContent } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Link, Outlet, useLocation } from "react-router-dom";
import useAppSidebar from "@/stores/useAppSidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import useNotifications from "@/stores/useNotifications";
import { useEffect } from "react";

function Dashboard() {
  const location = useLocation();
  const { sidebarIsOpen } = useAppSidebar();
  const isMobile = useIsMobile();
  const { notifications, setNotifications, setNumberOfNots } =
    useNotifications();

  useEffect(() => {
    setNotifications([
      { id: 1, title: "Notification 1", content: "Content for notification 1" },
      { id: 2, title: "Notification 2", content: "Content for notification 2" },
      { id: 3, title: "Notification 3", content: "Content for notification 3" },
      { id: 4, title: "Notification 4", content: "Content for notification 4" },
      { id: 5, title: "Notification 5", content: "Content for notification 5" },
      { id: 6, title: "Notification 6", content: "Content for notification 6" },
      { id: 7, title: "Notification 7", content: "Content for notification 7" },
      { id: 8, title: "Notification 8", content: "Content for notification 8" },
      { id: 9, title: "Notification 9", content: "Content for notification 9" },
    ]);
  }, []);

  useEffect(() => {
    setNumberOfNots();
  }, [notifications]);

  return (
    <div id="dashboard" className="w-full h-full flex flex-col overflow-auto">
      <SidebarProvider
        className="w-full min-h-fit h-full"
        defaultOpen={sidebarIsOpen ? true : false}
      >
        <AppSidebar />
        <main>
          <SidebarTrigger
            className="cursor-pointer md:absolute md:hidden"
            // onClick={dashboardToggleAppSidebar}
          />
          <Tabs
            defaultValue={
              location.pathname === "/dashboard/" ||
              location.pathname === "/dashboard"
                ? "application"
                : location.pathname === "/dashboard/bio" ||
                  location.pathname === "/dashboard/bio/"
                ? "bio"
                : "analysis"
            }
            value={
              location.pathname === "/dashboard/bio" ||
              location.pathname === "/dashboard/bio/"
                ? "bio"
                : location.pathname === "/dashboard/analysis" ||
                  location.pathname === "/dashboard/analysis/"
                ? "analysis"
                : "application"
            }
            className="p-4"
            style={{
              width: isMobile
                ? "100dvw"
                : isMobile === false && sidebarIsOpen === false
                ? "calc(100vw - (var(--sidebar-width-icon)))"
                : "calc(100vw - (var(--sidebar-width)))",
            }}
          >
            <TabsList className="grid w-full grid-cols-3">
              <Link to="bio" className="">
                <TabsTrigger value="bio" className="cursor-pointer w-full">
                  Bio
                </TabsTrigger>
              </Link>
              <Link to="/dashboard">
                <TabsTrigger
                  value="application"
                  className="cursor-pointer w-full"
                >
                  Application
                </TabsTrigger>
              </Link>
              <Link to="analysis">
                <TabsTrigger value="analysis" className="cursor-pointer w-full">
                  Analysis
                </TabsTrigger>
              </Link>
            </TabsList>
            <TabsContent value="application">
              <Card>
                <CardHeader>
                  <CardTitle>Application</CardTitle>
                  <CardDescription>
                    Change your application here. After saving, you'll be logged
                    out.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label>Data table</Label>
                    <DataTable />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <Outlet />
          </Tabs>
        </main>
      </SidebarProvider>
    </div>
  );
}

export default Dashboard;
