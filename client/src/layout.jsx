// import React from "react";
// import Sidebar from "./compPonents/sidebar";
// import Main from "./components/main";
import AppSidebar from "./components/app-sidebar.jsx";
import { Button } from "@/components/ui/button";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Header from "./components/header/header.jsx";
import { Outlet, useLoaderData } from "react-router-dom";
const Layout = ({ children }) => {
  const projects = useLoaderData();

  return (
    <div>
      <SidebarProvider defaultOpen={true}>
        <div className="flex flex-col h-screen w-full">
          <Header></Header>
          <div className=" flex-1 h-full overflow-hidden">
            <div className="flex flex-1 h-full overflow-hidden">
              <AppSidebar projects={projects} />
              <main className="flex flex-1 bg-gray-400 min-w-0">
                {/* <SidebarTrigger className="mb-4" /> */}
                {children}
                <Outlet context={{ projects }}></Outlet>
              </main>
            </div>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
