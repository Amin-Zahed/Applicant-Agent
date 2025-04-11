import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

import { Link, Outlet, useLocation } from "react-router-dom";

function Profile() {
  const location = useLocation();

  return (
    <div id="profile" className="w-full h-full flex flex-col overflow-auto">
      <SidebarProvider className=" w-full min-h-0 h-full">
        <AppSidebar />
        <main>
          <SidebarTrigger className="cursor-pointer md:bsolute md:hidden" />
          <br />
          <h1 className="text-center">Profile</h1>
          <br />
          <Tabs
            defaultValue={
              location.pathname === "/profile/" ||
              location.pathname === "/profile/application"
                ? "application"
                : location.pathname === "/profile/info"
                ? "info"
                : "chart"
            }
            className="w-dvw md:w-[calc(100vw-16rem)]"
          >
            <TabsList className="grid w-full grid-cols-3">
              <Link to="info" className="">
                <TabsTrigger value="info" className="cursor-pointer w-full">
                  Info
                </TabsTrigger>
              </Link>
              <Link to="application">
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
            <Outlet />
          </Tabs>
        </main>
      </SidebarProvider>
      <br />
    </div>
  );
}

export default Profile;
