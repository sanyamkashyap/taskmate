import ProjectForm from "@/app/dashboard/project/form";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Backdrop from "./backdrop";

const Modal = ({ selectedProject, setSelectedProject, setShowModal,showModal }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return createPortal(
    <Backdrop>
      <ProjectForm
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
        setShowModal={setShowModal}
        showModal={showModal}
      />
    </Backdrop>,

    document.getElementById("modal-root")
  );
};

export default Modal;
