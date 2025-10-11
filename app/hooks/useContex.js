"use client"
import React, { createContext, useContext, useState } from "react";
import { data } from "../data";

const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const { users, projects, todos } = data;
  const [newTodo, setNewTodos] = useState([]);
  const [newProject, setNewProject] = useState([]);
  const [newUser, setNewUser] = useState([]);
  return (
    <ProjectContext.Provider
      value={{
        users,
        projects,
        todos,
        newTodo,
        setNewTodos,
        newProject,
        setNewProject,
        newUser,
        setNewUser,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const ProjectState = () => {
  return useContext(ProjectContext);
};

export default ProjectProvider;
