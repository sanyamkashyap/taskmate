import express from "express";
import Todo from "../models/todoModel.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const todo = await Todo.find;
  res.json("this is todo");
});

router.post("/", async (req, res) => {
  const { title, description, priority } = req.body;
  const addTodo = await Todo.create({
    title,
    description,
  });

  console.log(addTodo);

  res.json("todo added");
});

export default router;
