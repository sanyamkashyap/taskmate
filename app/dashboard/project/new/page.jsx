"use client";
import { UseProject } from "@/app/context/useContex";
import React from "react";

const NewProject = () => {
  const { projects } = UseProject();
  return (
    <div>
      {projects.map((project, i) => (
        <div key={project.id}>{project.name}</div>
      ))}
    </div>
  );
};

export default NewProject;
