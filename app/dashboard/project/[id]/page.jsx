"use client";
import TodoCard from "@/app/compenents/todos/todoCard";
import { UseProject } from "@/app/context/useContex";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const { todos } = UseProject();
  const params = useParams();
  const id = params.id;

  return (
    <div>
      {/* {todo ? todo.title : "not found"} */}
      {todos
        .filter((todo) => String(todo.projectId) === String(id))
        .map((todo) => (
          <div key={todo.id} className="mb-4">
            <TodoCard
              title={todo.title}
              description={todo.description}
            ></TodoCard>
          </div>
        ))}
    </div>
  );
};

export default Page;
