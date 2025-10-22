"use client";

import Card from "@/app/compenents/project/card";
import { UseProject } from "@/app/context/useContex";
import React, { useState } from "react";
import ProjectForm from "./form";
import Link from "next/link";
import Modal from "@/app/compenents/project/modal";

const Projects = () => {
  const { projects, newProject, setNewProject } = UseProject();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(() => !showModal);
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
          <div>
            <input className="border" type="text" name="search" />
          </div>
          <button onClick={toggleModal}>Create Project</button>
        </div>
        {showModal && (
          <div>
            <Modal
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
            />

            {/* <ProjectForm
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
            /> */}
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
