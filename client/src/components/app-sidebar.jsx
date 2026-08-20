import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import {
  Home,
  ListTodo,
  Settings,
  LayoutDashboard,
  Folder,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function AppSidebar({ projects }) {
  console.log(projects);
  return (
    <Sidebar className="top-14 h-[calc(100vh-56px)]" collapsible="icon">
      <SidebarHeader>
        {/* <SidebarTrigger /> */}
        <LayoutDashboard>
          <h1 className="text-lg font-bold">TaskMate</h1>
        </LayoutDashboard>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>

          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to="/dashboard">
                  <Home className="mr-2 h-4 w-4" />
                  Dashboard
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to="/todos">
                  <ListTodo className="mr-2 h-4 w-4" />
                  Todos
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to="/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Porjects</SidebarGroupLabel>
          {projects?.map((project) => (
            <SidebarMenuItem key={project._id}>
              <SidebarMenuButton asChild>
                <Link to={`/project/${project._id}`}>
                  <Folder className="mr-2 h-4 w-4" />
                  <span>{project.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
