import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "../components/app-sidebar.jsx";
import Layout from "../layout.jsx";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const Home = ({ children }) => {
  const navigate = useNavigate();
  const { projects } = useOutletContext();

  return (
    <div className="p-4">
      <div>All projects</div>
      <div>
        {projects.length === 0 ? (
          <div>No projects</div>
        ) : (
          projects.map((proj) => (
            <div key={proj._id} className="flex gap-3">
              <Card onClick={() => navigate(`/project/${proj._id}`)}>
                {proj.name}
              </Card>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
