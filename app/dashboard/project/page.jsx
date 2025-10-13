"use client";

import Card from "@/app/compenents/project/card";
import { UseProject } from "@/app/context/useContex";
import React, { useState } from "react";
import ProjectForm from "./form";
import Link from "next/link";

const Projects = () => {
  const { projects, newProject, setNewProject } = UseProject();
  const [showForm, setShowForm] = useState(false);
  const toggleform = () => {
    setShowForm(() => !showForm);
  };

  const handleButton = () => {};

  return (
    <div>
      <button onClick={toggleform}>Create Project</button>
      {showForm && (
        <div>
          <ProjectForm />
        </div>
      )}
      <div className="flex flex-col gap-2">
        {newProject.map((project) => (
          <div key={project.id}>
            <Link href={`/dashboard/project/${project.id}`}>
              <Card>{project.name}</Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
