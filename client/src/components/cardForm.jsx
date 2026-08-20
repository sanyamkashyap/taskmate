import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CardForm = ({ column, Form }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  console.log({ column: column });

  const { projectId } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3000/todo/${column._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(formData),
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={`${Form ? "" : "hidden"}`}>
      <Card>
        <CardContent>
          <form
            className="flex flex-col gap-3 px-3 pb-3"
            onSubmit={handleSubmit}
          >
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="title"
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
            <Button type="button">close</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardForm;
