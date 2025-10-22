import ProjectForm from "@/app/dashboard/project/form";
import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ selectedProject, setSelectedProject }) => {
  return createPortal(
    <ProjectForm
      selectedProject={selectedProject}
      setSelectedProject={setSelectedProject}
    />,
    document.getElementById("modal-root")
  );
};

export default Modal;
