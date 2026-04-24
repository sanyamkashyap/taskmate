import { useState } from "react";
import "./App.css";
import { Signup } from "./routes/sign.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./routes/login.jsx";
import Layout from "./layout.jsx";
import Home from "./routes/home.jsx";
import Main from "./components/main.jsx";
import ColumnForm from "./components/Column/columnForm.jsx";
import ProjectForm from "./components/projectForm.jsx";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    // element: <ColumnForm />,
    element: <Home />,
  },
  {
    path: "/project/:projectId",
    element: <Main />,
  },
]);

function App() {
  return <RouterProvider router={router} />;

  // <Signup />;
}

export default App;
