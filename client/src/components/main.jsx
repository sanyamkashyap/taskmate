import React from "react";
import Project from "../routes/project.jsx";
import Layout from "../layout.jsx";
import Home from "../routes/home.jsx";
import { useOutletContext } from "react-router-dom";

const Main = () => {
  const { projects } = useOutletContext();

  return <Project projects={projects} />;
};

export default Main;
