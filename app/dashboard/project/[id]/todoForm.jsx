import { UseProject } from "@/app/context/useContex";
import React, { useState } from "react";

const TodoForm = () => {
  const { todos } = UseProject();
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <form>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={todo.title}
          onChange={handleChange}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          value={todo.description}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default TodoForm;
