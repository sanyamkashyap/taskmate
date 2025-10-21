"use client";

import Card from "@/app/compenents/project/card";
import { UseProject } from "@/app/context/useContex";
import React, { useState } from "react";
import ProjectForm from "./form";
import Link from "next/link";

const Projects = () => {
  const { projects, newProject, setNewProject } = UseProject();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const toggleform = () => {
    setShowForm(() => !showForm);
  };

  const handleEdit = (project) => {
    setSelectedProject(project);
    console.log(project);
  };
  const handleButton = () => {};

  return (
    <div>
      <div className="flex gap-2 py-5">
        <div>
          <input className="border" type="text" name="search" />
        </div>
        <button onClick={toggleform}>Create Project</button>
        {showForm && (
          <div>
            <ProjectForm
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
            />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2">
        {newProject.map((project) => (
          <div key={project.id}>
            {/* <Link href={`/dashboard/project/${project.id}`}> */}
            <Card
              onEdit={handleEdit}
              project={project}
              title={project.name}
              description={project.description}
              projectId={project.id}
            ></Card>
            {/* </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
