"use client";
import { ProjectState } from "@/app/hooks/useContex";
import React from "react";

const NewProject = () => {
  const { projects } = ProjectState();
  return (
    <div>
      {projects.map((project) => (
        <div>{project.name}</div>
      ))}
    </div>
  );
};

export default NewProject;
