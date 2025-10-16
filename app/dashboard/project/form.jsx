import { UseProject } from "@/app/context/useContex";
import React, { useEffect, useState } from "react";

const ProjectForm = ({ project, isEditing, id }) => {
  const { projects, newProject, setNewProject } = UseProject();
  const [formData, setFormData] = useState({
    id: crypto.randomUUID(),
    name: "",
    description: "",
  });
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewProject((prevState) => [...prevState, { ...formData }]);
    console.log(newProject);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect;

  return (
    <div>
      <form className="flex flex-col py-18" onSubmit={handleSubmit}>
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
        <button> submit</button>
      </form>
    </div>
  );
};

export default ProjectForm;
