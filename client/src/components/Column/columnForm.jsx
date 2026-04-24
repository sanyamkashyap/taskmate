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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React, { useState } from "react";

const ColumnForm = ({ isOpen, setIsOpen, boardId }) => {
  const [columnData, setColumnData] = useState({
    name: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setColumnData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/board/column", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...columnData, boardId }),
      credentials: "include",
    });
  };

  return (
    <div className={`${isOpen ? "" : "hidden"}`}>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit} className="form">
            <Label htmlFor="name" className="ml-1">
              Name
            </Label>
            <Input
              type="text"
              name="name"
              value={columnData.name}
              onChange={handleChange}
              placeholder="name"
            />
            <Label htmlFor="name" className="ml-1">
              Status
            </Label>
            <Select
              value={columnData.status}
              onValueChange={(value) =>
                setColumnData((prev) => ({ ...prev, status: value }))
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="To do">To do</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                  <SelectItem value="Done">Done</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button>create</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ColumnForm;
