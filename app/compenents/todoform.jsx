"use client";

import { useState } from "react";

const Todoform = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({
    title: "backend dev",
    description: "create a serverless backend",
    status: "pending",
  });

  const handleAddTodos = (e) => {
    e.preventDefault();
    setTodos((prev) => [...prev, newTodo]);
    setNewTodo({
      title: "",
      description: "",
      status: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTodo((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="">
      <div className="todo-form max-w-[400px] mx-auto ">
        <form
          onSubmit={handleAddTodos}
          className="flex flex-col gap-[16px] p-6 mx-auto"
        >
          <div>
            <label name="title">Title</label>
            <input
              className="todo-input"
              type="text"
              name="title"
              value={newTodo.title}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="description"> Description</label>
            <textarea
              className="todo-input"
              type="text"
              name="description"
              value={newTodo.description}
              onChange={handleChange}
            />
          </div>
          
          <select
            name="status"
            value={newTodo.status}
            onChange={handleChange}
            className="todo-input"
          >
            <option value=""></option>
            <option value="InProgress">InProgress</option>
            <option value="Completed">Completed</option>
          </select>

          <button className="todo-button" type="submit">
            {" "}
            Add todo
          </button>
        </form>
      </div>
      <div>
        <li>
          {todos.map(({ title, description, status }, i) => (
            <div>
              <div>title : {title}</div>
              <div>description : {description}</div>
              <div>status: {status}</div>
            </div>
          ))}
        </li>
      </div>
    </div>
  );
};

export default Todoform;
