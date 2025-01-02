import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const DashBoardPage = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full min-h-screen ">
        <SidebarTrigger />
        <div className="bg-blue-400 py-6 px-4 w-full h-full">MAin</div>
      </div>
    </SidebarProvider>
  );
};

export default DashBoardPage;
