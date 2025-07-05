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

function Dashboard() {
  const location = useLocation();
  const { sidebarIsOpen } = useAppSidebar();
  const isMobile = useIsMobile();

  return (
    <div id="dashboard" className="w-full h-full flex flex-col overflow-auto">
      <SidebarProvider
        className="w-full min-h-fit h-full"
        defaultOpen={sidebarIsOpen ? true : false}
      >
        <AppSidebar />
        <main>
          <SidebarTrigger className="cursor-pointer md:absolute md:hidden" />
          <Tabs
            defaultValue={
              location.pathname === "/Applicant-Agent/dashboard/" ||
              location.pathname === "/Applicant-Agent/dashboard"
                ? "application"
                : location.pathname === "/Applicant-Agent/dashboard/bio" ||
                  location.pathname === "/Applicant-Agent/dashboard/bio/"
                ? "bio"
                : "analysis"
            }
            value={
              location.pathname === "/Applicant-Agent/dashboard/bio" ||
              location.pathname === "/Applicant-Agent/dashboard/bio/"
                ? "bio"
                : location.pathname === "/Applicant-Agent/dashboard/analysis" ||
                  location.pathname === "/Applicant-Agent/dashboard/analysis/"
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
              <Link to="/Applicant-Agent/dashboard">
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
