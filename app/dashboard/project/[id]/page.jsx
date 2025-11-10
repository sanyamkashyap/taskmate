"use client";
import TodoCard from "@/app/compenents/todos/todoCard";
import { UseProject } from "@/app/context/useContex";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const { todos, newProject } = UseProject();
  const params = useParams();
  const id = params.id;

  return (
    <div className="main-container">
      <div>
        {newProject.map(
          (p) =>
            p.id == id && <div className="text-xl font-semibold">{p.name}</div>
        )}
      </div>

      <div className="todo-wrapper">
        {/* {todos
          .filter((todo) => String(todo.projectId) === String(id))
          .map((todo) => (
            <div key={todo.id} className="mb-4">
              <TodoCard
              todo = {todos}
                id={todo.id}
                title={todo.title}
                description={todo.description}
              ></TodoCard>
            </div>
          ))} */}
      <TodoCard
      todos = {todos}
      paramId = {id}
      >

      </TodoCard>
      </div>
    </div>
  );
};

export default Page;
