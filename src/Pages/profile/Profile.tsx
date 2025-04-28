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
import useSidebar from "@/stores/useSidebar";
import { useIsMobile } from "@/hooks/use-mobile";

function Profile() {
  const location = useLocation();
  const { sidebarIsOpen } = useSidebar();
  const isMobile = useIsMobile();

  return (
    <div id="profile" className="w-full h-full flex flex-col overflow-auto">
      <SidebarProvider className=" w-full min-h-0 h-full">
        <AppSidebar />
        <main>
          <SidebarTrigger className="cursor-pointer md:absolute md:hidden" />
          <Tabs
            defaultValue={
              location.pathname === "/profile/" ||
              location.pathname === "/profile"
                ? "application"
                : location.pathname === "/profile/info" ||
                  location.pathname === "/profile/info/"
                ? "info"
                : "chart"
            }
            className="p-4"
            style={{
              width: isMobile
                ? "100dvw"
                : isMobile === false && sidebarIsOpen
                ? "calc(100vw - (var(--sidebar-width-icon)))"
                : "calc(100vw - (var(--sidebar-width)))",
            }}
          >
            <TabsList className="grid w-full grid-cols-3">
              <Link to="info" className="">
                <TabsTrigger value="info" className="cursor-pointer w-full">
                  Info
                </TabsTrigger>
              </Link>
              <Link to="/profile">
                <TabsTrigger
                  value="application"
                  className="cursor-pointer w-full"
                >
                  Application
                </TabsTrigger>
              </Link>
              <Link to="chart">
                <TabsTrigger value="chart" className="cursor-pointer w-full">
                  chart
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
      <br />
    </div>
  );
}

export default Profile;
