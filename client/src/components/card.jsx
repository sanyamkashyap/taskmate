import React, { useEffect, useState } from "react";
// import {
//   Card,
//   CardContent,

//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
import { Card } from "@/components/ui/card";
import { useNavigate, useParams } from "react-router-dom";

const Todos = ({ column, todos }) => {
  const { projectId } = useParams();

  return (
    <div className="flex flex-col gap-2">
      {todos
        .filter((todo) => todo.columnId === column._id)
        .map((todo) => (
          <Card>{todo.title}</Card>
        ))}
    </div>
  );
};

export default Todos;
