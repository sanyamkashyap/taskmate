import { UseProject } from "@/app/context/useContex";
import React, { useEffect, useState } from "react";

const ProjectForm = ({
  selectedProject,
  setSelectedProject,
  setShowModal,
  showModal,
}) => {
  const { projects, newProject, setNewProject } = UseProject();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedProject) {
      setNewProject((prev) =>
        prev.map((p) =>
          p.id === selectedProject.id ? { ...p, ...formData } : p
        )
      );
    } else {
      setNewProject((prevState) => [
        ...prevState,
        { ...formData, id: crypto.randomUUID() },
      ]);
    }

    setFormData({ name: "", description: "" });
    setSelectedProject(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  console.log(newProject)

  useEffect(() => {
    if (selectedProject) {
      setFormData({
        name: selectedProject.name,
        description: selectedProject.description,
      });
    }
  }, [selectedProject]);

  return (
    <div>
      <form
        className="flex flex-col py-18 bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-md "
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Project Name</label>
        <input
          className="border"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="description">Project Description</label>
        <input
          className="border"
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <button type="submit"> submit</button>
        <button
          type="button"
          onClick={() => {
            setSelectedProject(null);
            setShowModal(()=>!showModal);
          }}
        >
          close
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;
