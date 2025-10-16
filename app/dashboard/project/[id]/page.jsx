"use client";
import { UseProject } from "@/app/context/useContex";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const { todos } = UseProject();
  const params = useParams();
  const id = params.id;
  const todo = todos.find((t) => String(t.projectId) == String(id));
  // console.log(id);
  // console.log(todo);
  return <div>{todo ? todo.title : "not found"}</div>;
};

export default Page;
 