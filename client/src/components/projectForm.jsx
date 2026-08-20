import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { createPortal } from "react-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate, useParams } from "react-router-dom";

const ProjectForm = ({ isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3000/project`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      credentials: "include",
    });

    const data = await response.json();

    const boardId = data.board._id;
    // navigate(`./project/board/${boardId}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const closeModel = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  console.log(isOpen);
  return createPortal(
    <div
      onClick={closeModel}
      className={`fixed inset-0 z-[9999]  flex justify-center items-center h-screen bg-black/30 ${isOpen ? "" : "hidden"}`}
    >
      <div onClick={(e) => e.stopPropagation()} className="w-[80%]">
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-center items-center">
              Create Project
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form
              className="flex flex-col gap-3 px-3 pb-3"
              onSubmit={handleSubmit}
            >
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="name"
              />

              <Label htmlFor="description">Description</Label>
              <Input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="description"
              />

              <Button>submit</Button>
              <Button type="button" onClick={closeModel}>
                close
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>,
    document.getElementById("portal"),
  );
};

export default ProjectForm;
